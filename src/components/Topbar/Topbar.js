import PropTypes from "prop-types"
import React, { useState } from "react"
import { Navbar, Nav } from 'react-bootstrap/'
import { CollapseButton } from './CollapseButton'

import Navbrand from '../../images/thrive-favicon.png'
const styles = {
  darkPrimary: {
    backgroundColor: '#212121',
    color: '#14ffec'
  }
}
const Topbar = () => {
  const [isExpanded, setExpanded] = useState(false)
  return (
    <Navbar style={styles.darkPrimary} expand='lg' expanded={isExpanded}>
      <Navbar.Brand style={styles.darkPrimary} href="/">
        <img
          alt="Navbar Brand"
          src={Navbrand}
          width="35"
          height="35"
          className="d-inline-block align-top mb-0 "
        />{' '}
      Thrive Auto Detailing
    </Navbar.Brand>
      <Navbar.Toggle isExpanded={isExpanded} setExpanded={setExpanded} aria-controls="basic-navbar-nav" as={CollapseButton} />
        <Navbar.Collapse id="basic-navbar-nav" className='float-right'>
          <Nav className="mr-auto">
            <Nav.Link className='hvr-forward' style={styles.darkPrimary} href="/about">About</Nav.Link>
            <Nav.Link className='hvr-forward' style={styles.darkPrimary} href="/services">Services</Nav.Link>
            <Nav.Link className='hvr-forward' style={styles.darkPrimary} href="/gallery">Gallery</Nav.Link>
            <Nav.Link className='hvr-forward' style={styles.darkPrimary} href="/pricing">Pricing</Nav.Link>
            <Nav.Link className='hvr-forward' style={styles.darkPrimary} href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

    </Navbar>)
}

Topbar.propTypes = {
  siteTitle: PropTypes.string,
}

Topbar.defaultProps = {
  siteTitle: ``,
}

export default Topbar

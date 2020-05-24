import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap/'

import Navbrand from '../../images/navbrand.png'
const styles = {
  darkPrimary:{
    backgroundColor:'#212121',
    color:'#14ffec'
  }
}
const Topbar = ({ siteTitle }) => {
  return(<Navbar style={styles.darkPrimary} expand="lg">
     <Navbar.Brand style={styles.darkPrimary} href="/">
      <img
        alt="Navbar Brand"
        src={Navbrand}
        width="35"
        height="35"
        className="d-inline-block align-top mb-0"
      />{' '}
      Thrive Mobile Detailing
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link style={styles.darkPrimary} href="/about">About</Nav.Link>
      <Nav.Link style={styles.darkPrimary}  href="/services">Services</Nav.Link>
      <Nav.Link style={styles.darkPrimary}  href="/gallery">Gallery</Nav.Link>
      <Nav.Link style={styles.darkPrimary}  href="/contact">Contact</Nav.Link>
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

import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneVolume, faTags } from '@fortawesome/free-solid-svg-icons'
import thriveLogo from '../../images/thrive-car-125x.png'

const styles = {
  Row: {
    borderBottom: '1px solid black'
  },
  footerColor: {
    backgroundColor: "black",
    color: "white"
  },
  tealAccent: {
    backgroundColor: '#212121'
  }
}
const Footer = () => {
  return (
    <>
      <Container fluid={true} style={styles.tealAccent}>
        <Row className='py-md-3' style={styles.Row}>
          <Col md={4} className='d-flex justify-content-center py-3 py-md-0 px-0'>
            <div>
                <Row>
                  <Col xs={6} md='auto' className='hvr-icon-grow-rotate text-center mx-'>
                    <FontAwesomeIcon style={styles.iconSize} size={'5x'} icon={faEnvelope} className='hvr-icon' />
                  </Col>
                  <Col xs={6} md='auto'>
                    <Row>
                      <Col>
                        <h5>Get a</h5>
                      </Col>
                    </Row>
                    <Row >
                      <Col>
                        <b><i><h4 className='tealAccent'>Free Quote</h4></i></b>
                      </Col>
                    </Row>
                  </Col>
                </Row>
            </div>
          </Col>
          <Col md={4} className='d-flex justify-content-center py-3 py-md-0 px-0'>
            <div>
                <Row>
                  <Col xs={6} md='auto' className='hvr-icon-grow-rotate text-center mx-'>
                    <FontAwesomeIcon style={styles.iconSize} size={'5x'} icon={faPhoneVolume} className='hvr-icon' />
                  </Col>
                  <Col xs={6} md='auto'>
                    <Row>
                      <Col>
                        <h5>Contact us</h5>
                      </Col>
                    </Row>
                    <Row xs={12} md='auto'>
                      <Col>
                        <b><i><h4 className='tealAccent'>480-456-7890</h4></i></b>
                      </Col>
                    </Row>
                  </Col>
                </Row>
            </div>
          </Col>      
          <Col md={4} className='d-flex justify-content-center py-3 py-md-0 px-0'>
            <div>
                <Row>
                  <Col xs={6} md='auto' className='hvr-icon-grow-rotate text-center mx-'>
                    <FontAwesomeIcon style={styles.iconSize} size={'5x'} icon={faTags} className='hvr-icon' />
                  </Col>
                  <Col xs={6} md='auto'>
                    <Row>
                      <Col>
                        <h5>View our</h5>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <b><i><h4 className='tealAccent'>Pricing</h4></i></b>
                      </Col>
                    </Row>
                  </Col>
                </Row>
            </div>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col xs={'auto'} className='mx-auto pt-3 py-md-3'>
            <a href='/'>Home</a>
          </Col>
          <Col xs={'auto'} className='mx-auto pt-3 py-md-3'>
            <a href='/about'>About</a>
          </Col>
          <Col xs={'auto'} className='mx-auto pt-3 py-md-3'>
            <a href='/gallery'>Gallery</a>
          </Col>
          <Col xs={'auto'} className='mx-auto pt-3 py-md-3'>
            <a href='/services'>Services</a>
          </Col>
          <Col xs={'auto'} className='mx-auto pt-3 py-md-3'>
            <a href='/contact'>Contact</a>
          </Col>
        </Row>
        <Row className='text-center pt-3 py-md-3'>
          <Col>
            <p>Thrive Automotive Detailing: (480) 123-4567 | detail@thriveautodetailing.com | 123 W 1st st, Mesa AZ 85207</p>
          </Col>
        </Row>
      </Container>
      <Container fluid={true}>
        <Row style={styles.footerColor} className='text-center py-3'>
          <Col sm={4}>
            Thrive Automotive Detailing LLC
        </Col>
          <Col sm={4}>
            <img src={thriveLogo} height='35px' />
          </Col>
          <Col sm={4}>
            Website by Jonathan Hansen
        </Col>
        </Row>
      </Container>
    </>
  )
};

export default Footer;
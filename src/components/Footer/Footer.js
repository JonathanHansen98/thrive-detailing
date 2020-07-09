import React, {useState} from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneVolume, faTags } from '@fortawesome/free-solid-svg-icons'
import thriveLogo from '../../images/thrive-car-125x.png';
import jhLogo from '../../images/devlogo.png'
import Modal from '../Contact/ContactFormModal'

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
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Container fluid={true} style={styles.tealAccent}>
        <Row className='py-md-3' style={styles.Row}>
          <Col md={4} className='d-flex justify-content-center py-3 py-md-0 px-0'>
            <div>
              <Row>
                <Col xs={6} md='auto' className='hvr-icon-grow-rotate text-center mx-'>
                 
                  <FontAwesomeIcon id='contact-icon' onClick={() => setModalShow(true)} style={styles.iconSize} size={'5x'} icon={faEnvelope} className='hvr-icon' />
                  <Modal show={modalShow} conactModalShow={modalShow} setContactModal={setModalShow} />
                
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
                  <a href='/contact'>
                  <FontAwesomeIcon style={styles.iconSize} size={'5x'} icon={faPhoneVolume} className='hvr-icon' />

                  </a>
                </Col>
                <Col xs={6} md='auto'>
                  <Row>
                    <Col>
                      <h5>Contact us</h5>
                    </Col>
                  </Row>
                  <Row xs={12} md='auto'>
                    <Col>
                      <b><i><h4 className='tealAccent'>(480) 236-7673</h4></i></b>
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
                  <a href='/pricing'>
                  <FontAwesomeIcon style={styles.iconSize} size={'5x'} icon={faTags} className='hvr-icon' />

                  </a>
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
          <Col xs={'auto'} className='mx-auto py-1 py-md-3'>
            <a href='/'>Home</a>
          </Col>
          <Col xs={'auto'} className='mx-auto py-1 py-md-3'>
            <a href='/about'>About</a>
          </Col>
          <Col xs={'auto'} className='mx-auto py-1 py-md-3'>
            <a href='/gallery'>Gallery</a>
          </Col>
          <Col xs={'auto'} className='mx-auto py-1 py-md-3'>
            <a href='/services'>Services</a>
          </Col>
          <Col xs={'auto'} className='mx-auto py-1 py-md-3'>
            <a href='/contact'>Contact</a>
          </Col>
        </Row>
        <Row className='text-center py-3'>
          <Col>
            <p>Thrive Automotive Detailing: (480) 236-7673 | thriveautodetail@gmail.com</p>
          </Col>
        </Row>
      </Container>
      <Container fluid={true}>
        <Row style={styles.footerColor} className='text-center py-3'>
          <Col sm={4}>
            Thrive Automotive Detailing LLC
        </Col>
          <Col className='py-3 py-sm-0' xs={6} sm={4}>
            <img src={thriveLogo} height='35px' />
          </Col>
          <Col className='py-3 py-sm-0' xs={6} sm={4}>
            <a target="_blank" href="https://www.jonhansen.dev" >
              <img height='35px' src={jhLogo} />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default Footer;
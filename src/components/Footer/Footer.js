import React from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import FooterIconTag from './FooterIconTag';
import { faBlackTie } from '@fortawesome/free-brands-svg-icons';

const styles = {
  Row: {
    borderBottom: '1px solid black'
  },
  footerColor: {
    backgroundColor: "black",
    color: "white"
  },
  tealAccent: {
    backgroundColor:'#212121'
  }
}


const tag = [
  {
    tagIcon: 'faEnvelope',
    tagHead: 'Get a',
    tagBold: 'Free Quote'
  },
  {
    tagIcon: 'faPhoneVolume',
    tagHead: 'Contact us',
    tagBold: '480-123-4567'
  },
  {
    tagIcon: 'faTags ',
    tagHead: 'View our',
    tagBold: 'Pricing'
  }
];

const Footer = () => {
  return (
    <>
    <Container fluid={true} style={styles.tealAccent}>
    <Row className='py-3' style={styles.Row}>
      {tag.map((ad, index) => {
        return (
          <Col md={4} className='py-3' key={index}>
          <FooterIconTag content={ad}  />
          </Col>
        )
      })}
    </Row>
    <Row className='text-center'>
      <Col className='mx-auto py-3'>
        <a href='/'>Home</a>      
      </Col>
      <Col className='mx-auto py-3'>
        <a href='/about'>About</a>      
      </Col>
      <Col className='mx-auto py-3'>
        <a href='/gallery'>Gallery</a>      
      </Col>
      <Col className='mx-auto py-3'>
        <a href='/services'>Services</a>      
      </Col>
      <Col className='mx-auto py-3'>
        <a href='/contact'>Contact</a>      
      </Col>
    </Row>
    <Row className='text-center py-3'>
      <Col>
      <p>Thrive Automotive Detailing: (480) 123-4567 | detail@thriveautodetailing.com | 123 W 1st st, Mesa AZ 85207</p>
      </Col>
    </Row>
    </Container>
    <Container fluid={true}>
      <Row style={styles.footerColor} className='text-center py-3'>
        <Col sm={4}> 
          somethin else
        </Col>
        <Col sm={4}> 
          logo
        </Col>
        <Col sm={4}> 
          idk
        </Col>
      </Row>
    </Container>
    </>
  )
};

export default Footer;
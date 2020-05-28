import React from 'react'
import {Col, Row, Container} from 'react-bootstrap'
import Pic from '../../images/redCar.jpeg'

const SummarySection = () =>  {
  const styles = {
    h1: {
      borderBottom: '1px solid rgb(196, 190, 190)'
    }
  }
   return (
    <Container>
      <Row>
        <Col lg={6}>
         <h1 className='tealAccent hvr-forward' style={styles.h1} >Mobile Detailing Services</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
        
        <Col lg={6}>
        <img className='shadowImg' src={Pic}></img>
        </Col>
      </Row>
    </Container>
   )
}

export default SummarySection
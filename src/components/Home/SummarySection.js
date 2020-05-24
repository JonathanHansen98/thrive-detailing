import React from 'react'
import {Col, Row, Container} from 'react-bootstrap'

const SummarySection = () =>  {
  const styles = {
    h1: {
      borderBottom: '1px solid rgb(196, 190, 190)'
    }
  }
   return (
    <Container>
      <Row>
        <Col sm={6}>
         <h1 className='tealAccent' style={styles.h1} >Mobile Detailing Services</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
        
        <Col sm={6}>
        <img src='https://via.placeholder.com/400x350'></img>
        </Col>
      </Row>
    </Container>
   )
}

export default SummarySection
import React from 'react'
import {Col, Row, Container} from 'react-bootstrap'
import Img from '../Layout/image'

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
         <p>We use the best products on the market to detail your vehicle. From cleaning chemicals, upholstery shampoos, to wax. We don't skimp on quality. We want you to feel confident in the products we use on your vehicle.</p>
        </Col>
        
        <Col lg={6}>
        <Img className='shadowImg' fileName="redCar.jpeg"/>
        </Col>
      </Row>
    </Container>
   )
}

export default SummarySection
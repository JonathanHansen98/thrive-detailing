import React from 'react'
import { Row, Col, Container, Form, Button, Card } from 'react-bootstrap'


const HoursAndInfo = () => {
  return (
    <div>
      <Row >
        <Col>
          <Card body>
            <Row className='py-4'>
              <Col>
                <div className='text-center'>
                  <img src='https://via.placeholder.com/400x100'></img>
                </div>
              </Col>
            </Row>
            <Row className='py-4'>
              <Col>
                <Row>
                  <Col>
                    <h5>Hours</h5>
                  </Col>
                </Row>
                <Row>
                  <Col className='text-center'>
                    <p>lorem10</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className='py-4'>
              <Col>
                <Row>
                  <Col>
                    <h5>Contact info</h5>
                  </Col>
                </Row>
                <Row>
                  <Col className='text-center'>
                    <p>lorem10</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default HoursAndInfo

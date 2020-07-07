import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import thriveLogo from '../../images/thrive-logo-125x.png'



const HoursAndInfo = () => {
  return (
    <div>
      <Row >
        <Col>
          <Card className='veryDark shadowImg' body>
            <Row>
              <Col>
                <div className='text-center'>
                  <img src={thriveLogo}></img>
                </div>
              </Col>
            </Row>
            <Row className='py-4'>
              <Col>
                <Row>
                  <Col>
                    <h5>Hours:</h5>
                  </Col>
                </Row>
                <Row>
                  <Col className='text-center'>
                    <p>Mon - 8a - 5p</p>
                    <p>Tue - 8a - 5p</p>
                    <p>Wed - 8a - 5p</p>
                  </Col>
                  <Col className='text-center'>
                    <p>Thu - 8a - 5p</p>
                    <p>Fri - 8a - 5p</p>
                    <p>Sat - 8a - 5p</p>
                  </Col>
                </Row>
                <Row>
                  <Col className='text-center'>
                    < p>Sun - Closed</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row >
              <Col>
                <Row>
                  <Col>
                    <h5>Contact Info:</h5>
                  </Col>
                </Row>
                <Row>
                  <Col className='text-center'>
                    <p>Thrive Automotive Detailing: (480) 236-7673</p>
                    <p>thriveautodetail@gmail.com</p>
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

import React from 'react'

import {Row, Col, Container} from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterIconTag = (props) => {
  console.log(props)
  return (
    <div>
      <Container className='d-flex justify-content-center'>
      <Row>
        <Col xs={6} md='auto'>
        <FontAwesomeIcon icon={props.content.tagIcon} size="5x" />
        </Col>
        <Col xs={6} md='auto'>
          <Row>
            <Col>
            <h5>{props.content.tagHead}</h5>
            </Col>
          </Row>
          <Row md='auto'>
            <Col>
            <b><i><h4 className='tealAccent'>{props.content.tagBold}</h4></i></b>
            </Col>
          </Row>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default FooterIconTag

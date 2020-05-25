import React from 'react'
import { Card } from 'react-bootstrap'
import { render } from 'react-dom'

const ServiceCard = (props) => {
  console.log(props)
  return (
    <>
      <Card className='my-3' style={{ width: "auto" }}>
        <Card.Header><h5 className='tealAccent'>{props.info.cardHeader}</h5></Card.Header>
        <Card.Img variant="top" src={props.info.imageURL} />
        <Card.Body>
          <Card.Text>
            {props.info.cardBody}
              </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default ServiceCard
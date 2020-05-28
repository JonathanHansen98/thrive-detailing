import React from 'react'
import { Card } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroller';

const ServiceCard = (props) => {
  return (
    <>
      <Card className='my-5 mx-3 hvr-reveal veryDark' style={{ width: "auto" }}>
        <Card.Header><h5 className='tealAccent'>{props.info.cardHeader}</h5></Card.Header>
        <Card.Img variant="top" src={props.info.imageURL}/>
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
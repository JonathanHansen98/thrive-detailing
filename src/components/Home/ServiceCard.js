import React from 'react'
import { Card } from 'react-bootstrap'
import Img from '../Layout/image';

const ServiceCard = (props) => {
  const styles = {
    cardHeight: {
      minHeight: '510px',
      width: '20rem'
    }
  };
  
  return (
    <>
      <Card className='my-5 mx-3 hvr-reveal veryDark' style={styles.cardHeight}>
        <Card.Header><h5 className='tealAccent'>{props.info.cardHeader}</h5></Card.Header>
        <Img fileName={props.info.imageURL} style={{ width: '100%' }} alt="" />
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
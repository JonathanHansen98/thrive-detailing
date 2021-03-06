import React, {useState} from 'react'
import { Card, Button } from 'react-bootstrap'
import Modal from '../Calendly/CalendlyModal'



const PriceCard = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Card className={props.class}>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Button className='py-3' onClick={() => setModalShow(true)} variant="teal" block>Schedule an appointment.</Button>
      <Modal show={modalShow} modalShow={modalShow} setModalShow={setModalShow} />
    </Card.Body>
  </Card>
  )
}

export default PriceCard

import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Calendly from './Calendly'

const ContactFormModal = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4><i>Set up an appointment</i></h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='pb-0'>
          <Calendly />
        </Modal.Body>
        <Modal.Footer className='pt-0'>
          <Button className='my-3' variant='teal' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ContactFormModal

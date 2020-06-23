import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import Form from './ContactForm'

const ContactFormModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4><i>Email to set up an appointment or get pricing!</i></h4>
        </Modal.Title>
        </Modal.Header>
        <Modal.Body className='pb-0'>
         <Form/>
        </Modal.Body>
        <Modal.Footer className='pt-0'>
        <Button variant='teal' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ContactFormModal

import React, { useState } from 'react'
import { Modal, Button, Row, Col, Container } from 'react-bootstrap'
import Form from './Contact/ContactForm'

const ContactFormModal = (props) => {
  return (
    <>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Send us an Email!
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form></Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ContactFormModal

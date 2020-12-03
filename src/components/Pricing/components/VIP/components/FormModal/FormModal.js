import React from "react"
import { Button, Form, Grid, Modal } from "react-bootstrap"
import styled from "styled-components"

const title = styled.h6``
const FormModal = ({ open, handleClose, packageName }) => {
  console.log(packageName)
  return (
    <Modal backdrop={true} show={open} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {packageName}
          <p style={{ fontSize: 18, margin: 0 }}>
            Send us your details and we will contact you to confirm your
            subscription!
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          name="vip-package"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="requested-package" value={packageName} />
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="name" placeholder="John Smith" />
          <Form.Label>Phone Number</Form.Label>
          <Form.Control name="phone" type="phone" placeholder="123-456-7890" />
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="johnsmith@somewhere.com"
          />
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="details"
            placeholder={`2017 Chevy Cruz.\nMon, Wed 8am-5pm availability.`}
          />
          <Button
            style={{ float: "right", marginTop: 12 }}
            variant="teal"
            type="submit"
            onClick={handleClose}
          >
            Send
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default FormModal

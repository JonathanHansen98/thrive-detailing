import React from 'react';
import { Row, Col, Container, Form, Button, Card } from 'react-bootstrap'
import HoursInfo from './HoursAndInfo'
import ContactForm from './ContactForm'
const Contact = () => {

    return (
        <>
            <style type="text/css">
            {`
            .btn-teal {
              background-color: #14ffec;
              color: black;
            }
            `}
            </style>
            <Container className='py-3'>
                <Row>
                    <Col sm={6} className='p-5'>
                        <ContactForm/>
                    </Col>
                    <Col sm={6} className='p-5 d-flex align-items-center'>
                      <HoursInfo/>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Contact;
import React from 'react';
import { Row, Col, Container} from 'react-bootstrap'
import HoursInfo from './HoursAndInfo'
import ContactForm from './ContactForm'
const Contact = () => {

    return (
        <>
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
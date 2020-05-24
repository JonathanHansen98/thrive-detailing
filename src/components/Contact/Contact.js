import React from 'react';
import { Row, Col, Container, Form, Button, Card } from 'react-bootstrap'
const Contact = () => {

    return (
        <>
            <style type="text/css">
            {`
            .btn-teal {
              background-color: #14ffec;
              color: white;
            }
            `}
            </style>
            <Container>
                <Row>
                    <Col sm={6} className='px-4'>
                        <Row>
                            <Col className="text-center">
                                <h1>Contact Us</h1>
                            </Col>
                        </Row>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="input" placeholder="John" />
                                </Col>
                                <Col>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="input" placeholder="Smith" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="johnsmith@somewhere.com" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="input" placeholder="123-456-7890" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group controlId="subject">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control as="select">
                                            <option>Quote</option>
                                            <option>Question</option>
                                            <option>Comment</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group controlId="message">
                                        <Form.Label>Message:</Form.Label>
                                        <Form.Control as="textarea" rows="5" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button variant='teal' type='submit' size="md" block>
                                        Submit
                                     </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col sm={6} className='px-4 d-flex'>
                        <Row className='align-self-center'>
                            <Col>
                                <Card body>
                                    <Row className='py-4'>
                                        <Col>
                                            <div className='text-center'>
                                                <img src='https://via.placeholder.com/400x100'></img>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className='py-4'>
                                        <Col>
                                            <Row>
                                                <Col>
                                                    <h5>Hours</h5>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className='text-center'>
                                                    <p>lorem10</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className='py-4'>
                                        <Col>
                                            <Row>
                                                <Col>
                                                    <h5>Contact info</h5>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className='text-center'>
                                                    <p>lorem10</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Contact;
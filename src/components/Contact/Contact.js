import React from 'react';
import { Row, Col, Container, Form, Button, Card } from 'react-bootstrap'
const Contact = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
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
                                    <Button type='submit' variant="primary" size="md" block>
                                        Submit
                                     </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Card body>
                                    <div className='text-center'>
                                        <img src='https://via.placeholder.com/400x100'></img>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>

                            </Col>
                        </Row>
                        <Row>
                            <Col>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Contact;
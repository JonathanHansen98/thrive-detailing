import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";

const ContactForm = () => {
    return (
        <div>
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
        </div>
    );
};

export default ContactForm;
import React from 'react';
import { Button, Col, Form, Row } from "react-bootstrap";

const ContactForm = () => {
    return (
        <div>
            <Row>
                <Col className="text-center">
                    <h1>Contact Us</h1>
                </Col>
            </Row>
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <Form>
                    <Row>
                        <Col>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="i" placeholder="John" id="first_name"/>
                        </Col>
                        <Col>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="input" placeholder="Smith" id="last_name"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="johnsmith@somewhere.com" id="email"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="input" placeholder="123-456-7890" id="phone"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="subject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control as="select" id="subject">
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
                                <Form.Control as="textarea" rows="5" id="message"/>
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
            </form>
        </div>
    );
};

export default ContactForm;
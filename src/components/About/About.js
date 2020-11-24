import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Img from '../Layout/image'

const About = () => {
    return (
        <>
            <Container className='py-5'>
                <Row>
                    <Col sm={6} className='align-self-center py-3 '>
                        <Row>
                            <Col>
                                <h1 className='mb-4 tealAccent underlined hvr-forward'>About Us</h1>
                                <p>Thrive Auto Detail is a mobile detail service business based out of Queen Creek, AZ, providing service in the greater areas of Arizona. We strive to provide quality service at affordable pricing and compassion for our customers needs. We are a new business started in January 2020 but our detailers have 10+ years experience in detailing all rupees of vehicles. We use the best products shipped from California to provide the best detail work. Thrive Auto is family owned and operated. Our owner is Mason Lara, receptionist is his wife Leandra Lara and our detailers also include brother Josh Lara and son Noah Lara. We look forward to doing business with you and getting your vehicle shining again.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h1 className='mb-4 tealAccent underlined hvr-forward'>My story</h1>
                                <p>My name is Mason Lara, owner and founder of Thrive Auto Detail. My wife is Leandra Lara and we have six children together. We are a faith based family running a faith based company trusting in the Lords provision while pursuing my dreams of starting and spreading Thrive Auto throughout Arizona and possibly nationally one day. How Thrive Auto started; I’ve always wanted my own detail business. It’s my passion and hobby to bring cars to life or look new off the lot. Fear always stopped me from taking the risk of starting my own business until one day I decided to take a giant leap of faith and just went for it. The thought of will I have enough clients or will I be able to provide for my family run through my mind often but I know if I stay strong in my faith, God will provide. I thrive to work hard and gain customers trust and friendship. You are not just another customer to us, you become part of the Thrive family.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={6} className='text-center d-flex justify-content-center order-first'>
                        <Img fileName="about.jpg" className='align-self-center w-100' alt=""/>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default About;
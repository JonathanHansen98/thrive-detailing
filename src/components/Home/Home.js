import React from "react"
import { Container, Row, Col, } from "react-bootstrap/"
import Hero from "./Hero"
import ServiceCard from './ServiceCard'
import SummarySection from "./SummarySection"

const services = [
    {
        cardHeader: "Automotive Detailing",
        imageURL: "outside-sponge.jpg",
        cardBody: "We are dedicated to providing quality service and customer satisfaction at a great value in a mobile service where we come to you at your convenience."
    },
    {
        cardHeader: "RV/ Boat Detailing",
        imageURL: "semiTruck.jpeg",
        cardBody: "We offer multiple services to meet all of your vehicle care needs. We offer these services at an exceptional value to not only save you time, but money as well."
    },
    {
        cardHeader: "Mobile Detailing Services",
        imageURL: "soapyGrey.jpeg",
        cardBody: "We have mobile auto detailing service vehicles near you! We detail right on-site at your home or your office and bring everything we need to perform your detail."
    }
];

const Home = () => {
    const styles = {
        grid: {
            paddingLeft: 0,
            paddingRight: 0,
        },
        row: {
            marginLeft: 0,
            marginRight: 0,
        },
        col: {
            paddingLeft: 0,
            paddingRight: 0,
        },
    }
    return (
        <>
            <Container fluid={true}>
                <Row className={styles.row}>
                    <Col className={[styles.col, "px-0"]} sm={12}>
                        <Hero />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    {services.map((service, index) => {
                        return (
                            <Col className='d-flex justify-content-center' sm={12} md={4} key={index}>
                                <ServiceCard info={service} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
            <div className='py-5 veryDark mx-0 w-100'>
                <Container >
                    <SummarySection />
                </Container>
            </div>
        </>
    )
};

export default Home;

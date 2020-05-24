import React from "react"

import { Container, Row, Col, } from "react-bootstrap/"

import Hero from "./Hero"

import ServiceCard from './ServiceCard'
import SummarySection from "./SummarySection"

const services = [
    {
        cardHeader: "Automotive Detailing",
        imageURL: "https://via.placeholder.com/150x150",
        cardBody: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        cardHeader: "RV/ Boat Detailing",
        imageURL: "https://via.placeholder.com/150x150",
        cardBody: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        cardHeader: "Mobile Services",
        imageURL: "https://via.placeholder.com/150x150",
        cardBody: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
]


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
       container: {
           backgroundColor: '#212121'
         }
    }
    return (
        <>
            <Container fluid={true}>
                <Row className={styles.row}>
                    <Col className={styles.col,"px-0"} sm={12}>
                        <Hero />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    {services.map((service, index) => {
                        return (
                            <Col sm ={12} md={4} key={index}>
                                <ServiceCard info={service} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
            <Container className='py-5' fluid={true} style={styles.container}>
            <SummarySection/>
            </Container>
        </>
    )
};

export default Home;

import React from "react"

import { Container, Row, Col, } from "react-bootstrap/"

import Hero from "./Hero"

import ServiceCard from './ServiceCard'
import SummarySection from "./SummarySection"
import redCarPic from '../../images/outside-sponge.jpg'
import semiPic from '../../images/semiTruck.jpeg'
import greyCarPic from '../../images/soapyGrey.jpeg'

const services = [
    {
        cardHeader: "Automotive Detailing",
        imageURL: redCarPic,
        cardBody: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        cardHeader: "RV/ Boat Detailing",
        imageURL: semiPic,
        cardBody: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        cardHeader: "Mobile Services",
        imageURL:greyCarPic,
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
    }
    return (
        <>
            <Container fluid={true}>
                <Row className={styles.row}>
                    <Col className={[styles.col,"px-0"]} sm={12}>
                        <Hero />
                    </Col>
                </Row>
            </Container>
            <Container fluid={true}>
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
            <Container className='py-5 veryDark' fluid={true}>
            <SummarySection/>
            </Container>
        </>
    )
};

export default Home;

import React from 'react'
import Hero from '../Home/Hero'
import {Container, Row, Col} from 'react-bootstrap'

const About = () => {
    return (
        <>
         <Hero/>
            <Container>
                <Row>
                    <Col sm={6} className='align-self-center'>
                        <h1 className='mb-4'>About Us</h1>
                        <p>Vape ennui vexillologist selfies cliche activated charcoal pop-up keffiyeh shaman. Cronut lomo readymade 8-bit, dreamcatcher everyday carry crucifix live-edge authentic chillwave bitters put a bird on it kogi church-key letterpress. Iceland kitsch succulents cloud bread blog swag dreamcatcher synth green juice godard cold-pressed. Small batch flannel gastropub, bespoke helvetica locavore shoreditch. Snackwave green juice kogi hoodie palo santo before they sold out. Photo booth disrupt 3 wolf moon farm-to-table, gluten-free adaptogen authentic iceland man braid. Beard pok pok iceland small batch crucifix taxidermy, salvia prism man bun copper mug gluten-free.</p>

                        <p>Try-hard dreamcatcher sriracha, forage wolf chicharrones fam crucifix hella hoodie yr next level. Slow-carb glossier cray stumptown cold-pressed. Man bun fanny pack shoreditch fam pop-up, literally taiyaki. Kogi 3 wolf moon dreamcatcher, listicle schlitz irony adaptogen edison bulb VHS. Raw denim schlitz helvetica chillwave cardigan health goth kogi raclette selvage kombucha pabst. Taxidermy wayfarers sartorial pabst church-key vexillologist shabby chic neutra. Hella activated charcoal twee health goth.</p>
                    </Col> 
                    <Col sm={6} className='text-center d-flex'>
                        <img className='align-self-center' src='https://via.placeholder.com/450x650'/>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default About;
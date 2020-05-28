import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import wheelPic from '../../images/wheels.jpg'
import rvPic from '../../images/rv-wash.jpg'
import outsidePic from '../../images/outside-sponge.jpg'
import Modal from '../ContactFormModal'
const Services = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const styles = {
    container: {
      backgroundColor: '#212121'    },
    lineSpaced: {
      lineHeight: '3'
    }
  }
  return (
    <div>
      <Container fluid='true' className='px-5 py-5'>
        <Row>
          <Col className='align-self-center' style={styles.lineSpaced}>
            <h1 className='tealAccent hvr-forward underlined'>Automotive Detailing</h1>
            <p>Vape ennui vexillologist selfies cliche activated charcoal pop-up keffiyeh shaman. Cronut lomo readymade 8-bit, dreamcatcher everyday carry crucifix live-edge authentic chillwave bitters put a bird on it kogi church-key letterpress. Iceland kitsch succulents cloud bread blog swag dreamcatcher synth green juice godard cold-pressed. Small batch flannel gastropub, bespoke helvetica locavore shoreditch. Snackwave green juice kogi hoodie palo santo before they sold out. Photo booth disrupt 3 wolf moon farm-to-table, gluten-free adaptogen authentic iceland man braid. Beard pok pok iceland small batch crucifix taxidermy, salvia prism man bun copper mug gluten-free.</p>
          </Col>
          <Col xl={6} className='text-center'>
            <img className='shadowImg' src={wheelPic} width='100%' />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => setModalShow(true)} block>Request a quote</Button>
            <Modal show={modalShow} onHide={() => setModalShow(false)} />
          </Col>
        </Row>
      </Container>
      <Container style={styles.container} fluid='true' className='px-5 py-5'>
        <Row>
          <Col xl={6} className='text-center'>
            <img className='shadowImg' src={rvPic} width='100%' />
          </Col>
          <Col className='align-self-center' style={styles.lineSpaced}>
            <h1 className='tealAccent hvr-forward underlined mt-5'>Boat/ Rv Detailing</h1>
            <p>Vape ennui vexillologist selfies cliche activated charcoal pop-up keffiyeh shaman. Cronut lomo readymade 8-bit, dreamcatcher everyday carry crucifix live-edge authentic chillwave bitters put a bird on it kogi church-key letterpress. Iceland kitsch succulents cloud bread blog swag dreamcatcher synth green juice godard cold-pressed. Small batch flannel gastropub, bespoke helvetica locavore shoreditch. Snackwave green juice kogi hoodie palo santo before they sold out. Photo booth disrupt 3 wolf moon farm-to-table, gluten-free adaptogen authentic iceland man braid. Beard pok pok iceland small batch crucifix taxidermy, salvia prism man bun copper mug gluten-free.</p>
          </Col>
        </Row>
      </Container>
      <Container fluid='true' className='px-5 py-5'>
        <Row>
          <Col className='align-self-center' style={styles.lineSpaced}>
            <h1 className='tealAccent hvr-forward underlined'>Mobile Services</h1>
            <p >Vape ennui vexillologist selfies cliche activated charcoal pop-up keffiyeh shaman. Cronut lomo readymade 8-bit, dreamcatcher everyday carry crucifix live-edge authentic chillwave bitters put a bird on it kogi church-key letterpress. Iceland kitsch succulents cloud bread blog swag dreamcatcher synth green juice godard cold-pressed. Small batch flannel gastropub, bespoke helvetica locavore shoreditch. Snackwave green juice kogi hoodie palo santo before they sold out. Photo booth disrupt 3 wolf moon farm-to-table, gluten-free adaptogen authentic iceland man braid. Beard pok pok iceland small batch crucifix taxidermy, salvia prism man bun copper mug gluten-free.</p>
          </Col>
          <Col xl={6} className='text-center'>
            <img className='shadowImg' src={outsidePic} width='100%' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Services

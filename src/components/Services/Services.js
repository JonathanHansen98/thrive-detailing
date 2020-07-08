import React, {useState} from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import wheelPic from "../../images/wheels.jpg"
import rvPic from "../../images/rv-wash.jpg"
import outsidePic from "../../images/outside-sponge.jpg"
import Modal from "../Contact/ContactFormModal"
const Services = () => {
  const [conactModalShow, setContactModal] = useState(false)
  const styles = {
    container: {
      backgroundColor: "#212121",
    },
    lineSpaced: {
      lineHeight: "1.5",
    },
  }
  return (
    <div>
      <Container className="px-5 py-5">
        <Row>
          <Col style={styles.lineSpaced}>
            <h1 className="tealAccent hvr-forward underlined">
              Automotive Detailing
            </h1>
            <p>
              We take time to address your personal goals and concerns and make
              sure you’re receiving the exact service you are looking for.
              Melted crayons in the cup holder? No problem. Kids get sick in the
              back seat? We’ve seen it all. Spoil your vehicle with a fresh from
              the showroom look and feel. At Thrive Auto Detailing, we strive to
              offer our clients the most professional service and the highest
              quality work. We only use the finest products to protect, preserve
              and enhance your vehicle. Our products are proven safe for your
              vehicle’s interior and exterior. We guarantee you will be happy
              with any service you select to pamper your vehicle with.
            </p>
          </Col>
          <Col xl={6} className="text-center">
            <img className="shadowImg" src={wheelPic} width="100%" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="teal tealShadowHover"
              className="mt-5"
              onClick={() => setContactModal(true)}
              block
            >
              Request a quote
            </Button>
            <Modal show={conactModalShow} conactModalShow={conactModalShow} setContactModal={setContactModal} />
          </Col>
        </Row>
      </Container>
      <div
        style={styles.container}
        className="w-100 d-flex justify-content-center"
      >
        <Container className="px-5 py-5 mx-0">
          <Row>
            <Col xl={6} className="text-center d-flex align-items-center">
              <img className="shadowImg" src={rvPic} width="100%" />
            </Col>
            <Col style={styles.lineSpaced}>
              <h1 className="tealAccent hvr-forward underlined mt-5">
                Boat/ Rv Detailing
              </h1>
              <p>
                Thrive Detailing provides RV detailing near you and performs
                your RV detailing wherever you parked it! We're completely
                mobile and bring everything needed to do the detail on site
                including water and power! No matter if it’s a Class-A
                Motorhome, 5th wheel or travel trailer, our RV detailing pricing
                is straight forward. Simply select your RV's length and we will
                give you a price.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                variant="teal tealShadowHover"
                className="mt-5"
                onClick={() => setContactModal(true)}
                block
              >
                Request a quote
              </Button>
              <Modal show={conactModalShow} conactModalShow={conactModalShow} setContactModal={setContactModal} />
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="px-5 py-5">
        <Row>
          <Col className="align-self-center" style={styles.lineSpaced}>
            <h1 className="tealAccent hvr-forward underlined">
              Mobile Services
            </h1>
            <p>
              Thrive Detailing is Arizona’s leading car cleaning and protection
              service. Our mobile auto detailing units travel throughout the
              valley, offering premium detailing services, paint correction,
              ceramic coatings, and more. We bring our own water and power so we
              can complete your service at your work, home, almost anywhere.
            </p>
          </Col>
          <Col xl={6} className="text-center">
            <img className="shadowImg" src={outsidePic} width="100%" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="teal tealShadowHover"
              className="mt-5"
              onClick={() => setContactModal(true)}
              block
            >
              Request a quote
            </Button>
            <Modal show={conactModalShow} conactModalShow={conactModalShow} setContactModal={setContactModal} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Services

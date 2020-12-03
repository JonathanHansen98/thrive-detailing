import React, {useState} from "react"
import { Button, Col, Row } from "react-bootstrap"
import CalendlyModal from "../../../Calendly/CalendlyModal"
const services = [
  "Exterior hand wash.",
  "Clay bar.",
  "Wheels and heel wells cleaned and dressed.",
  "Door jams cleaned.",
  "Windows cleaned inside and out.",
  "Shampoo(extract)/ steam carpets, seats and trunk.",
  "Chrome polishing.",
  "Leather recondition treatment.",
  "Buff and wax.",
]
const UltimateWash = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Row>
        <Col>
          <h3
            style={{ display: "inline", fontWeight: "bold", marginBottom: 4 }}
            className="underlined pr-3"
          >
            The Ultimate Detail Package Includes:
          </h3>
        </Col>
      </Row>
      <Row className="py-2">
        <Col xs={12} sm={6}>
          <ul>
            {services.map((text, ind) => {
              if (ind <= services.length / 2) {
                return <li>{text}</li>
              }
            })}
          </ul>
        </Col>
        <Col xs={12} sm={6}>
          <ul>
            {services.map((text, ind) => {
              if (ind > services.length / 2) {
                return <li>{text}</li>
              }
            })}
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3
            style={{ display: "inline", fontWeight: "bold", marginBottom: 4 }}
            className="underlined pr-3"
          >
            For Only:
          </h3>
          <h3 className="my-2">$135-$195</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Button
            onClick={() => {
              setOpen(true)
            }}
            variant="teal"
          >
            Schedule Now
          </Button>
        </Col>
      </Row>
      <CalendlyModal modalShow={open} show={open} setModalShow={setOpen} />
    </>
  )
}

export default UltimateWash

import React, { useState } from "react"
import { Button, Col, Row } from "react-bootstrap"
import CalendlyModal from "../../../Calendly/CalendlyModal"

const PriceTab = ({ title, services, price, startsAt }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Row className="pt-5">
        <Col>
          <h3
            style={{ display: "inline", fontWeight: "bold", marginBottom: 4 }}
            className="underlined pr-3"
          >
            {title} Includes:
          </h3>
        </Col>
      </Row>
      <Row className="py-2">
        <Col xs={12} sm={6}>
          <ul>
            {services.map((text, ind) => {
              if (ind <= services.length / 2) {
                return <li key={text}>{text}</li>
              }
            })}
          </ul>
        </Col>
        <Col xs={12} sm={6}>
          <ul>
            {services.map((text, ind) => {
              if (ind > services.length / 2) {
                return <li key={text}>{text}</li>
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
            {startsAt ? "Starts At:" : "For Only:"}
          </h3>
          <h3 className="my-2">{price}</h3>
        </Col>
      </Row>
      <Row className="pb-5">
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

export default PriceTab

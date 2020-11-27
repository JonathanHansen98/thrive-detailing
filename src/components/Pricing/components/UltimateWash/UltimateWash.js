import React from "react"
import { Button, Col, Row } from "react-bootstrap"
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
  return (
    <>
      <Row>
        <Col>
          <h5 style={{ display: "inline" }} className="underlined pr-3">
            The Ultimate Detail Package Includes:
          </h5>
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
          <h5 style={{ display: "inline" }} className="underlined pr-3">
            For Only:
          </h5>
          <h3 className="my-2">$135-$195</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Button variant="teal">Schedule Now</Button>
        </Col>
      </Row>
    </>
  )
}

export default UltimateWash

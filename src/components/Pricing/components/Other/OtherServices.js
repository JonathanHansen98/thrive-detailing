import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Col, Row } from "react-bootstrap"

const OtherServices = () => {
  const services = [
    {
      name: "Headlight Restoration.",
      price: "$25",
    },
    {
      name: "Ceramic Coating.",
      price: "$500 - $800",
    },
    {
      name: "Engine Shampoo.",
      price: "$20",
    },
    {
      name: "Paint Restoration.",
      price: "$300 - $600",
    },
    {
      name: "Pet Hair Removal.",
      price: "$45",
    },
    {
      name: "Decontamination/ Iron Removal.",
      price: "$45",
    },
  ]
  const boatRvServices = [
    "Full Wash.",
    "Buff and Wax.",
    "Wheel wells cleaned and dressed.",
    "Inside Detail. (Included for boats)",
    "Ceramic Coating.",
  ]
  return (
    <>
      <Row className="mb-3 pt-5">
        <Col xs={12}>
          <h3
            className="underlined pr-3"
            style={{ fontWeight: "bold", display: "inline" }}
          >
            Pricing
          </h3>
        </Col>
      </Row>
      {services.map(({ name, price }, ind) => (
        <Row
          key={name}
          style={{
            backgroundColor: ind % 2 == 0 ? "#232323" : "#323232",
            padding: "4px 8px",
          }}
        >
          <Col xs={10}>{name}</Col>
          <Col xs={2} style={{ display: "flex" }}>
            {price}
          </Col>
        </Row>
      ))}
      <Row className="my-3">
        <Col>
          <h3
            className="underlined pr-3"
            style={{ fontWeight: "bold", display: "inline" }}
          >
            Boats, RV's, & Trailers
          </h3>
        </Col>
      </Row>
      {boatRvServices.map((service, ind) => (
        <Row
          key={service}
          className={ind == boatRvServices.length - 1 && "mb-5 mb-sm-0"}
          style={{
            backgroundColor: ind % 2 == 0 ? "#232323" : "#323232",
            padding: "4px 8px",
          }}
        >
          <Col xs={10}>{service}</Col>
          <Col xs={2} style={{ display: "flex" }}>
            {service == "Ceramic Coating." ? (
              "$800 -$1500"
            ) : (
              <FontAwesomeIcon
                style={{ alignSelf: "center", color: "#14ffec" }}
                icon={faCheckCircle}
              />
            )}
          </Col>
        </Row>
      ))}
    </>
  )
}

export default OtherServices

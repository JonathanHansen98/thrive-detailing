import { faGem, faStar } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { Col, Row } from "react-bootstrap"
import PackageCard from "./components/PackageCard/PackageCard"

const VIP = () => {
  const packages = [
    {
      name: "Gold Package",
      billingCycle: "month",
      icon: faStar,
      price: "$50",
      interval: 'Bi-Weekly'
    },
    {
      name: "Diamond Package",
      billingCycle: "month",
      icon: faGem,
      price: "$100",
      interval: 'Weekly'
    },
  ]
  return (
    <Row style={{ justifyContent: "center" }}>
      {packages.map(({ name, interval, price, icon, billingCycle }) => (
        <Col xs={4} style={{ justifyContent: "center", display: "flex" }}>
          <PackageCard
            name={name}
            price={price}
            icon={icon}
            interval={interval}
            billingCycle={billingCycle}
          />
        </Col>
      ))}
    </Row>
  )
}

export default VIP

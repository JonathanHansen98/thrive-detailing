import { faGem, faStar } from "@fortawesome/free-solid-svg-icons"
import React, { useState } from "react"
import { Col, Row } from "react-bootstrap"
import FormModal from "./components/FormModal/FormModal"
import PackageCard from "./components/PackageCard/PackageCard"

const VIP = () => {
  const [open, setOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState(null)

  const handleOpen = () => setOpen(true)

  const packages = [
    {
      name: "Gold Package",
      billingCycle: "month",
      icon: faStar,
      price: "$50",
      interval: "Bi-Weekly",
    },
    {
      name: "Diamond Package",
      billingCycle: "month",
      icon: faGem,
      price: "$100",
      interval: "Weekly",
    },
  ]
  return (
    <>
      <Row className="py-5" style={{ justifyContent: "center" }}>
        {packages.map(({ name, interval, price, icon, billingCycle }) => (
          <Col
            xs={12}
            md={4}
            className="py-2 py-md-0"
            style={{ justifyContent: "center", display: "flex" }}
          >
            <PackageCard
              name={name}
              price={price}
              icon={icon}
              interval={interval}
              billingCycle={billingCycle}
              handleOpen={handleOpen}
              setSelectedPackage={setSelectedPackage}
            />
          </Col>
        ))}
      </Row>
      <FormModal
        packageName={selectedPackage}
        open={open}
        handleClose={() => {
          setOpen(false)
        }}
      />
    </>
  )
}

export default VIP

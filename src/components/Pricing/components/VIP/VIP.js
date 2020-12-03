import { faGem, faStar } from "@fortawesome/free-solid-svg-icons"
import React, { useState } from "react"
import { Col, Row } from "react-bootstrap"
import FormModal from "./components/FormModal/FormModal"
import PackageCard from "./components/PackageCard/PackageCard"

const VIP = () => {
  const [open, setOpen] = useState(true)
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
      <div style={{ display: "none" }}>
        <form
          name="vip-package"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="vip-package" />
          <input name="name" type="name" placeholder="John Smith" />
          <input name="phone" type="phone" placeholder="123-456-7890" />
          <input
            name="email"
            type="email"
            placeholder="johnsmith@somewhere.com"
          />
          <textarea
            name="details"
            placeholder={`2017 Chevy Cruz.\nMon, Wed 8am-5pm availability.`}
            rows="3"
          ></textarea>
        </form>
      </div>
      <Row style={{ justifyContent: "center" }}>
        {packages.map(({ name, interval, price, icon, billingCycle }) => (
          <Col xs={4} style={{ justifyContent: "center", display: "flex" }}>
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

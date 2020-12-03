import React, { useState } from "react"
import PriceCard from "./PriceCard"
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap"
import UltimateWash from "./components/UltimateWash/UltimateWash"
import VIP from "./components/VIP/VIP"
import Other from "./components/Other/OtherServices"
import FormModal from "./components/VIP/components/FormModal/FormModal"

const tabs = [
  {
    name: "Ultimate Detail",
    component: <UltimateWash />,
  },
  {
    name: "VIP Maintenance Washes",
    component: <VIP />,
  },
  {
    name: "Other Services",
    component: <Other />,
  },
]
const Pricing = () => {
  const [tab, setTab] = useState(tabs[0])
  return (
    <>
      <div style={{ display: "none" }}>
        <form
          name="vip-package"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input name="package" placeholder="John Smith" />
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
      <Container>
        <Row className="pt-5">
          <Col style={{ justifyContent: "center", display: "flex" }} xs={12}>
            <ButtonGroup>
              {tabs.map(button => (
                <Button
                  style={{
                    backgroundColor:
                      tab.name == button.name ? "#14ffec" : "transparent",
                    color: tab.name == button.name ? "black" : "#fff",
                    border: "2px solid #14ffec",
                  }}
                  onClick={() => {
                    setTab(button)
                  }}
                >
                  {button.name}
                </Button>
              ))}
            </ButtonGroup>
          </Col>
        </Row>
        {tab.component}
      </Container>
      <FormModal />
    </>
  )
}

export default Pricing

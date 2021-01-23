import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Button, Card } from "react-bootstrap"

const PackageCard = ({
  icon,
  name,
  interval,
  price,
  billingCycle,
  handleOpen,
  setSelectedPackage,
}) => {
  return (
    <Card
      className="text-center"
      style={{ padding: "16px", width: 300, backgroundColor: "#232323" }}
    >
      <div style={{ display: "flex", marginBottom: 8 }}>
        <div
          style={{
            borderRadius: "50%",
            border: "3px solid #14ffec",
            display: "inline-block",
            margin: "0 auto",
            padding: 8,
            width: 45,
            height: 45,
            display: "flex",
            justifyContent: "center",
            WebkitAlignItems: "center",
          }}
        >
          <FontAwesomeIcon
            style={{
              color: "#14ffec",
              width: 35,
              height: 20,
            }}
            icon={icon}
          />
        </div>
      </div>
      <Card.Title>
        <h5>{name}</h5>
      </Card.Title>
      <div className={"mb-2"}>
        <p className={"mb-2"}>{interval}</p>
        <h5 style={{ fontSize: 32, fontWeight: "bold", display: "inline" }}>
          {price}
        </h5>
        <p style={{ display: "inline", fontSize: 14, fontWeight: "normal" }}>
          /{billingCycle}
        </p>
      </div>
      <div style={{ padding: "8px 8px 0 8px" }}>
        <Button
          onClick={() => {
            handleOpen()
            setSelectedPackage(name)
          }}
          variant="teal"
        >
          Sign Up Now
        </Button>
      </div>
    </Card>
  )
}

export default PackageCard

import React from 'react'
import { TabPane, Row, Col } from 'react-bootstrap';
import { PricingCard } from '.';

const VehiclePanels = ({ vehicles }) => {
  return vehicles.map(({ name, services }) => (
    <TabPane eventKey={name}>
      <Row>
        {services.map((service) => (
          <Col sm={12} lg={4} style={{marginBottom: '2rem'}}>
            <PricingCard {...service} />
          </Col>
        ))}
      </Row>
    </TabPane>
  ))
};

export default VehiclePanels;

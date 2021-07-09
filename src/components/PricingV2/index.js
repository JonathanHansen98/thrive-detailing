import React from 'react';
import { Container, Row, Col, Tab } from 'react-bootstrap';
import { VehicleSelect, VehiclePanels } from './components';
import vehicles from './vehicles';

const Pricing = () => {
  return (
    <>
      <Container style={{ padding: '2rem' }}>
        <Tab.Container defaultActiveKey="Car">
          <Row className='mb-4'>
            <Col sm={12} className='text-center'>
              <h5>Choose Your Vehicle Type</h5>
              <VehicleSelect vehicles={vehicles} />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Tab.Content>
                <VehiclePanels vehicles={vehicles} />
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
};

export default Pricing;

import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Modal from '../../Calendly/CalendlyModal';

const PricingCard = ({ title, price, details }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Card style={{ width: '100%', backgroundColor: '#212121', height: '100%'}}>
      <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
        <Card.Title style={{ color: '#14ffec' }} className='text-center'>{title}</Card.Title>
        <Card.Title className='text-center text-muted'>${price}</Card.Title>
        <Card.Text style={{flexGrow: 1}}>
          <ul>
            {details.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </Card.Text>
        <Button className='py-3' onClick={() => setModalShow(true)} variant="teal" block>Schedule an appointment.</Button>
        <Modal show={modalShow} modalShow={modalShow} setModalShow={setModalShow} />
      </Card.Body>
    </Card>
  );
};

export default PricingCard;

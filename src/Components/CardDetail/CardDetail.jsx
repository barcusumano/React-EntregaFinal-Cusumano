import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardDetail = ({funko}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={funko.img} />
      <Card.Body>
        <Card.Title>{funko.name}</Card.Title>
        <Card.Text>
          {funko.franchise} | €{funko.price} 
        </Card.Text>
       <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardDetail;
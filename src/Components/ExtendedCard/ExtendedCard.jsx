import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AppContext } from "../../data";

const ExtendedDetail = ({funko}) => {
  const { addToCart } = useContext(AppContext)
  const addToCardLocal = (e) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(funko)
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={funko.img} />
      <Card.Body>
        <Card.Title className="nodeco">{funko.name}</Card.Title>
        <Card.Text className="nodeco">
          {funko.franchise} | €{funko.price} 
        </Card.Text>
        <Card.Text>
          {funko.description}
        </Card.Text>
       <Button variant="dark" onClick={addToCardLocal}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}


export default ExtendedDetail;
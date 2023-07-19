import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AppContext } from "../../data";

const CardDetail = ({funko}) => {
  const { addToCart } = useContext(AppContext);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const addToCardLocal = (e) => {
    e.stopPropagation();
    e.preventDefault();
    
    if (!isButtonDisabled) {
      addToCart(funko);
      setButtonDisabled(true);
      setTimeout(() => setButtonDisabled(false), 1000);
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={funko.img} />
      <Card.Body>
        <Card.Title className="nodeco">{funko.name}</Card.Title>
        <Card.Text className="nodeco">
          {funko.franchise} | €{funko.price} 
        </Card.Text>
        <Button variant="dark" onClick={addToCardLocal} disabled={isButtonDisabled}>
          {isButtonDisabled ? "Adding..." : "Add to cart"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardDetail;

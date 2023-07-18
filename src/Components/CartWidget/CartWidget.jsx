import React from 'react'
import Badge from 'react-bootstrap/Badge';
import './cartwidget.css';
import img from "./cart.svg" 


const CartWidget = ({ cartItems }) => {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.quantity;
  });
  return (
    <div>
        <img className='cartPosition' src={img} alt="cart" />
        <Badge pill bg="secondary" className='size1'>
        {total}
        </Badge>
    </div>
  )
}

export default CartWidget

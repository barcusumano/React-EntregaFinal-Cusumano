import React from 'react'
import Badge from 'react-bootstrap/Badge';
import './cartwidget.css';
import img from "./cart.svg" 


const CartWidget = () => {
  return (
    <div>
        <img className='cartPosition' src={img} alt="cart" />
        <Badge pill bg="secondary" className='size1'>
        2
        </Badge>
    </div>
  )
}

export default CartWidget

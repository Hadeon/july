import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  let cart = useSelector(state => state.cart.items);
  return (
    <div>
      <h1>This is a cart</h1>
      {cart.map((e) => {
        return <p>{e}</p>
      })}
    </div>
  )
}

export default Cart;
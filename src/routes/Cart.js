import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  let cart = useSelector(state => state.cart.items);
  let loggedIn = useSelector(state => state.user.userData)
  return (
    <div>
      {loggedIn ? (
        <h1>This is a cart</h1>,
        cart.map((e) => {
          return <p>{e}</p>
        })
      ) : (
        <div>
          <h1>Must be logged in</h1>
          <p>Not logged in</p>
        </div>
      )}
    </div>
  )
}

export default Cart;
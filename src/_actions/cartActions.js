import {
  SET_CART,
  GET_CART
} from '../constants/action-types';

export const setCart = (items) => {
  return {
    type: SET_CART,
    payload: items
  }
}

export const getCart = () => {
  return {
    type: GET_CART
  }
}
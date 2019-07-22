import {
  ADD_CART,
  GET_CART,
  REMOVE_CART
} from '../constants/action-types';

export const addCart = (items) => {
  return {
    type: ADD_CART,
    payload: items
  }
}

export const removeCart = (items) => {
  return {
    type: REMOVE_CART,
    payload: items
  }
}

export const getCart = () => {
  return {
    type: GET_CART
  }
}
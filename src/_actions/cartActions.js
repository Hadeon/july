import {
  ADD_CART,
  GET_CART,
  REMOVE_CART
} from '../constants/action-types';

export const addCart = (item) => {
  return {
    type: ADD_CART,
    payload: item
  }
}

export const removeCart = (item) => {
  return {
    type: REMOVE_CART,
    payload: item
  }
}

export const getCart = () => {
  return {
    type: GET_CART
  }
}
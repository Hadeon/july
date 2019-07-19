import {
  SET_CART,
  GET_CART
} from '../constants/action-types';

const initialState = {
  items: ['Large Mens Shirt', 'Coffee mug']
}

export default function(state = initialState, action) {
  switch(action.type) {
  case SET_CART:
    return {
      ...state,
      items: action.payload
    }
  case GET_CART:
    return {
      ...state
    }
  default:
    return state;
  }
}
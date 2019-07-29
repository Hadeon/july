import {
  ADD_CART,
  REMOVE_CART,
  GET_CART
} from '../constants/action-types';

const initialState = {
  items: ['Large Mens Shirt', 'Coffee mug']
}

export default function(state = initialState, action) {
  switch(action.type) {
  case ADD_CART:
    return {
      ...state,
      items: action.payload
    }
  case REMOVE_CART:
    return state.filter(({ id }) => id !== action.data)
  case GET_CART:
    return {
      ...state
    }
  default:
    return state;
  }
}
import {
  SET_USER,
  GET_USER
} from '../constants/action-types';

const initialState = {
  userData: ''
}

export default function(state = initialState, action) {
  switch(action.type) {
  case SET_USER:
    return {
      ...state,
      userData: action.payload
    }
  case GET_USER:
    return {
      ...state
    }
  default: 
    return state;
  }
}
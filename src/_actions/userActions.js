import {
  SET_USER,
  GET_USER
} from '../constants/action-types';

export const setUser = (userData) => {
  return {
    type: SET_USER,
    payload: userData
  }
}

export const getUser = () => {
  return {
    type: GET_USER
  }
}
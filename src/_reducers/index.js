import { combineReducers } from 'redux';
import userReducer from './userReducer';
import cartReducer from './cartReducer';

// Placeholder reducer until the needed state is more defined

export default combineReducers({
  user: userReducer,
  cart: cartReducer
})
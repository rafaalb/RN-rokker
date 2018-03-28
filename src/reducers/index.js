import { combineReducers } from 'redux';
import {
  cart
} from './cart_reducer';
import {
  products
} from './products_reducer';

export default combineReducers({
  cart,
  products
});

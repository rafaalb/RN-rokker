import {
  GET_PRODUCTS
} from './action_types';
import API from './../services/fixtureApi';

export const getProducts = () => ({
    type: GET_PRODUCTS,
    payload: API.getProducts()
});

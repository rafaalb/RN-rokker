import {
  GET_PRODUCTS,
  ENABLE_PRODUCT,
  DISABLE_PRODUCT
} from './../actions/action_types';

export const products = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.payload;
    case ENABLE_PRODUCT:
      return state.concat().map((prod) => {
        return prod.id === action.payload ? { ...prod, enabled: true } : prod;
      });
    case DISABLE_PRODUCT:
    return state.concat().map((prod) => {
      return prod.id === action.payload ? { ...prod, enabled: false } : prod;
    });
    default:
      return state;
  }
};

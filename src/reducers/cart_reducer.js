import {
  ADD_TO_CART,
  REMOVE_FROM_CART
} from './../actions/action_types';


export const cart = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...state,
        action.payload
      ];
    case REMOVE_FROM_CART: {
      return state.filter((prod) => prod.id !== action.payload);
    }
    default:
      return state;
  }
};

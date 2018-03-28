import {
  ADD_TO_CART,
  DISABLE_PRODUCT,
  ENABLE_PRODUCT,
  REMOVE_FROM_CART
} from './action_types';

export const addToCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product
    });
    dispatch({
      type: DISABLE_PRODUCT,
      payload: product.id
    })
  };
}

export const removeFromCart = (id) => {
    return (dispatch) => {
      dispatch({
        type: REMOVE_FROM_CART,
        payload: id
      });
      dispatch({
        type: ENABLE_PRODUCT,
        payload: id
      });
    }
};

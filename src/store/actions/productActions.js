import {ADD_CARTS_URL, CATEGORİES_URL, PRODUCTS_URL} from '../../sevice/urls';
import {getRequest, postRequest} from '../../sevice/verb';
import {
  ADD_CART_PENDİGN,
  ADD_CART_REJECTED,
  FETCH_ADD_CART_LİST,
  FETCH_PRODUCT_LİST,
  PRODUCT_PENDİGN,
  PRODUCT_REJECTED,
} from '../types/productTypes';

export const getProductList = params => {
  return async dispatch => {
    dispatch({
      type: PRODUCT_PENDİGN,
    });
    try {
      const response = await getRequest(PRODUCTS_URL, params);
      dispatch({
        type: FETCH_PRODUCT_LİST,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_REJECTED,
      });
    }
  };
};

export const addToCart = payload => {
  return async dispatch => {
    dispatch({
      type: ADD_CART_PENDİGN,
    });
    try {
      const response = await postRequest(ADD_CARTS_URL, payload);
      dispatch({
        type: FETCH_ADD_CART_LİST,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ADD_CART_REJECTED,
      });
    }
  };
};

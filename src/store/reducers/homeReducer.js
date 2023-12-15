const {
  FETCH_PRODUCT_LİST,
  PRODUCT_PENDİGN,
  PRODUCT_REJECTED,
  FETCH_ADD_CART_LİST,
  ADD_CART_PENDİGN,
  ADD_CART_REJECTED,
} = require('../types/homeTypes');

const initialState = {
  productList: [],
  pending: false,
  isError: false,
  count: 0,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_LİST:
      return {
        ...state,
        productList: action.payload,
        pending: false,
        isError: false,
        count: 0,
      };
    case PRODUCT_PENDİGN:
      return {
        ...state,
        pending: true,
      };
    case PRODUCT_REJECTED:
      return {
        ...state,
        pending: false,
        isError: true,
        error: action.payload, // Hata mesajını ekleyin
      };

    case FETCH_ADD_CART_LİST:
      return {
        ...state,
        count: state.count + 1,
      };
    case ADD_CART_PENDİGN:
      return {
        ...state,
      };
    case ADD_CART_REJECTED:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default homeReducer;

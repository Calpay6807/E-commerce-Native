const {
  FETCH_CATEGORİES,
  CATEGORİES_PENDİGN,
  CATEGORİES_REJECTED,
} = require('../types/homeTypes');

const initialState = {
  categories: [],
  pending: false,
  isError: false,
  count: 0,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORİES:
      return {
        ...state,
        categories: action.payload,
        pending: false,
      };
    case CATEGORİES_PENDİGN:
      return {
        ...state,
        pending: true,
      };
    case CATEGORİES_REJECTED:
      return {
        ...state,
        pending: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default homeReducer;

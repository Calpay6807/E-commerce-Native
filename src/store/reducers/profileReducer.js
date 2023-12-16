const {
  FETCH_USER_INFO,
  USER_INFO_PENDİGN,
  USER_INFO_REJECTED,
} = require('../types/profileTypes');

const initialState = {
  profileInfo: {},
  pending: false,
  isError: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_INFO:
      return {
        ...state,
        profileInfo: action.payload,
        pending: false,
        isError: false,
        count: 0,
      };
    case USER_INFO_PENDİGN:
      return {
        ...state,
        pending: true,
      };
    case USER_INFO_REJECTED:
      return {
        ...state,
        pending: false,
        isError: true,
        error: action.payload, // Hata mesajını ekleyin
      };

    default:
      return state;
  }
};

export default profileReducer;

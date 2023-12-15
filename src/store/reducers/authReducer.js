import {
  FETCH_USER_LOGIN,
  FETCH_USER_LOGOUT,
  USER_LOGIN_PENDİGN,
  USER_LOGIN_REJECTED,
  USER_LOGOUT_PENDİGN,
  USER_LOGOUT_REJECTED,
} from '../types/authType';

const initialState = {
  isLogin: false,
  loginPending: false,
  token: null,
  isLoginError: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_LOGIN:
      return {
        ...state,
        isLogin: action.isLogin,
        token: action.payload,
        loginPending: false,
      };
    case USER_LOGIN_PENDİGN:
      return {
        ...state,
        loginPending: true,
      };
    case USER_LOGIN_REJECTED:
      return {
        ...state,
        loginPending: false,
        isError: true,
      };

    case FETCH_USER_LOGOUT:
      return {
        ...state,
        isLogin: action.isLogin,
        token: action.payload,
      };
    case USER_LOGOUT_PENDİGN:
      return {
        ...state,
        loginPending: true,
      };
    case USER_LOGOUT_REJECTED:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};

export default authReducer;

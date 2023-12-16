import {ADD_CARTS_URL, PROFİLE_İNFO_URL} from '../../sevice/urls';
import {getRequest, postRequest} from '../../sevice/verb';
import {USER_LOGIN_REJECTED} from '../types/authType';
import {FETCH_USER_INFO, USER_INFO_PENDİGN} from '../types/profileTypes';

export const getUserProfile = params => {
  return async dispatch => {
    dispatch({
      type: USER_INFO_PENDİGN,
    });
    try {
      const response = await getRequest(PROFİLE_İNFO_URL + `${params.id}`);
      dispatch({
        type: FETCH_USER_INFO,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: USER_LOGIN_REJECTED,
      });
    }
  };
};

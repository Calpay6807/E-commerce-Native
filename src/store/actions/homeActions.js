import {CATEGORİES_URL} from '../../sevice/urls';
import {getRequest, postRequest} from '../../sevice/verb';
import {
  FETCH_CATEGORİES,
  CATEGORİES_PENDİGN,
  CATEGORİES_REJECTED,
} from '../types/homeTypes';

export const getCategories = params => {
  return async dispatch => {
    dispatch({
      type: CATEGORİES_PENDİGN,
    });
    try {
      const response = await getRequest(CATEGORİES_URL, params);
      dispatch({
        type: FETCH_CATEGORİES,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: CATEGORİES_REJECTED,
      });
    }
  };
};

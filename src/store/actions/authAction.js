import {Alert} from 'react-native';
import {LOGİN_URL} from '../../sevice/urls';
import {postRequest} from '../../sevice/verb';
import {
  FETCH_USER_LOGIN,
  FETCH_USER_LOGOUT,
  USER_LOGIN_PENDİGN,
  USER_LOGIN_REJECTED,
  USER_LOGOUT_PENDİGN,
  USER_LOGOUT_REJECTED,
} from '../types/authType';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const userLogin = payload => {
  return async dispatch => {
    dispatch({
      type: USER_LOGIN_PENDİGN,
    });
    try {
      const response = await postRequest(LOGİN_URL, payload);
      await AsyncStorage.setItem('token', response.data.token);
      console.log(JSON.stringify(response.data));
      dispatch({
        type: FETCH_USER_LOGIN,
        payload: response.data.token,
        isLogin: true,
      });
    } catch (error) {
      dispatch({
        type: USER_LOGIN_REJECTED,
      });
      console.log(JSON.stringify(error.response, 0, 2));
      Alert.alert('Giriş Yap', error.response.data, [
        {text: 'Tamam', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };
};

export const checkUserLogin = () => {
  return async dispatch => {
    dispatch({
      type: USER_LOGIN_PENDİGN,
    });
    try {
      // const response = await postRequest(LOGİN_URL, payload);
      const token = await AsyncStorage.getItem('token');
      if (token)
        dispatch({
          type: FETCH_USER_LOGIN,
          payload: token,
          isLogin: true,
        });
    } catch (error) {
      dispatch({
        type: USER_LOGIN_REJECTED,
      });
    }
  };
};

export const userLogOut = () => {
  return async dispatch => {
    try {
      // const response = await postRequest(LOGİN_URL, payload);
      const token = await AsyncStorage.removeItem('token');

      dispatch({
        type: FETCH_USER_LOGOUT,
        payload: null,
        isLogin: false,
      });
      // Alert.alert('Çıkış İşlemi', 'Çıkışınız Başarıyla Tamamlanmıştır');
    } catch (error) {
      dispatch({
        type: USER_LOGOUT_REJECTED,
      });
    }
  };
};
// mor_2314
// 83r5^_

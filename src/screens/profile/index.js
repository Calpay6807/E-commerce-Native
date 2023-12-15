import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {userLogOut} from '../../store/actions/authAction';
import {useNavigation} from '@react-navigation/native';
import {HOME, LOGİN} from '../../utils/routes';
import Login from '../login';

const Profile = () => {
  const {isLogin} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const logOut = () => {
    dispatch(userLogOut());
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>
        {isLogin ? 'Çıkış' : 'Giriş'} Yapmak İçin Aşağıdaki Butonu Kullanın
      </Text>
      {isLogin ? (
        <Button onPress={logOut} title="Çıkış" />
      ) : (
        <Button onPress={() => navigation.navigate(LOGİN)} title="Giriş" />
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});

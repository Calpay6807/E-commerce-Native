import {StyleSheet, Text, View, Button, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {userLogOut} from '../../store/actions/authAction';
import {useNavigation} from '@react-navigation/native';
import {HOME, LOGİN} from '../../utils/routes';
import Login from '../login';
import {getUserProfile} from '../../store/actions/profileAction';

const Profile = () => {
  const {isLogin} = useSelector(state => state.auth);
  const {profileInfo, pending} = useSelector(state => state.profile);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const logOut = () => {
    dispatch(userLogOut());
  };
  useEffect(() => {
    dispatch(getUserProfile({id: 1}));
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {pending ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text style={{color: 'gray', fontSize: 32}}>
            {profileInfo?.username}
          </Text>
          <Text style={{color: 'gray', fontSize: 32}}>
            {profileInfo?.email}
          </Text>
        </>
      )}
      <Text style={{marginVertical: 20}}>
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

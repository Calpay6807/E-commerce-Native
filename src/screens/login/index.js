import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input, Button} from '@ui-kitten/components';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../../store/actions/authAction';

export default function Login({navigation}) {
  const loginSchema = () => {
    return Yup.object().shape({
      username: Yup.string().required('Zorunlu Alan'),
      password: Yup.string().required('Zorunlu Alan'),
    });
  };
  const {loginPending, isLogin} = useSelector(state => state?.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLogin) navigation.goBack();
  }, [isLogin]);
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={values => dispatch(userLogin(values))}
        validationSchema={loginSchema}>
        {({handleChange, handleSubmit, values, errors}) => (
          <View style={{gap: 30}}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 200,
              }}>
              <Text>resim alanı</Text>
            </View>
            <Input
              status={errors.username ? 'danger' : 'basic'}
              caption={errors.username}
              size="large"
              placeholder="Place your Username"
              value={values.username}
              label={'Username'}
              onChangeText={handleChange('username')}
            />
            <Input
              status={errors.password ? 'danger' : 'basic'}
              size="large"
              caption={errors.password}
              placeholder="Place your Password"
              label={'Password'}
              value={values.password}
              onChangeText={handleChange('password')}
            />
            {/* <Button onPress={handleSubmit} title="Submit" /> */}
            <Button
              onPress={handleSubmit}
              style={loginPending ? styles.pasiveButton : styles.activeButton}>
              {loginPending ? <ActivityIndicator /> : <Text>Giriş Yap</Text>}
            </Button>
            <Button
              onPress={() =>
                navigation.navigate('Register', {
                  username: values.username,
                  password: values.password,
                })
              }>
              <Text>Kayıt Ol</Text>
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 20,
  },
  activeButton: {},
  pasiveButton: {
    backgroundColor: 'gray',
  },
});

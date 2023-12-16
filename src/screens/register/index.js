import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input, Button} from '@ui-kitten/components';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin, userRegister} from '../../store/actions/authAction';

export default function Register({navigation}) {
  const registerSchema = () => {
    return Yup.object().shape({
      username: Yup.string().required('Zorunlu Alan'),
      password: Yup.string().required('Zorunlu Alan'),
      phone: Yup.number().required('Zorunlu Alan'),
      email: Yup.string().required('Zorunlu Alan').email('adam gibi yaz'),
    });
  };
  const {loginPending, isLogin, registerPending} = useSelector(
    state => state?.auth,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLogin) navigation.goBack();
  }, [isLogin]);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <Formik
          initialValues={{
            username: '',
            password: '',
            email: '',
            firstname: '',
            lastname: '',
            city: '',
            phone: '',
          }}
          onSubmit={values => dispatch(userRegister(values))}
          validationSchema={registerSchema}>
          {({handleChange, handleSubmit, values, errors}) => (
            <View style={{gap: 30}}>
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
                status={errors.email ? 'danger' : 'basic'}
                caption={errors.email}
                size="large"
                placeholder="Place your Email"
                value={values.email}
                label={'email'}
                onChangeText={handleChange('email')}
              />
              <Input
                status={errors.firstname ? 'danger' : 'basic'}
                caption={errors.firstname}
                size="large"
                placeholder="Place your firstname"
                value={values.firstname}
                label={'Firstname'}
                onChangeText={handleChange('firstname')}
              />
              <Input
                status={errors.lastname ? 'danger' : 'basic'}
                caption={errors.lastname}
                size="large"
                placeholder="Place your Lastname"
                value={values.lastname}
                label={'Lastname'}
                onChangeText={handleChange('lastname')}
              />
              <Input
                status={errors.phone ? 'danger' : 'basic'}
                caption={errors.phone}
                keyboardType="phone-pad"
                size="large"
                placeholder="Place your Phone"
                value={values.phone}
                label={'Phone'}
                onChangeText={handleChange('phone')}
              />
              <Input
                status={errors.city ? 'danger' : 'basic'}
                caption={errors.city}
                size="large"
                placeholder="Place your City"
                value={values.city}
                label={'City'}
                onChangeText={handleChange('city')}
              />

              <Input
                status={errors.password ? 'danger' : 'basic'}
                size="large"
                secureTextEntry
                caption={errors.password}
                placeholder="Place your Password"
                label={'Password'}
                value={values.password}
                onChangeText={handleChange('password')}
              />
              {/* <Button onPress={handleSubmit} title="Submit" /> */}
              <Button
                onPress={handleSubmit}
                style={
                  registerPending ? styles.pasiveButton : styles.activeButton
                }
                appearance="filled">
                {registerPending ? (
                  <ActivityIndicator size={'small'} />
                ) : (
                  <Text>Kayıt Ol</Text>
                )}
              </Button>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  activeButton: {},
  pasiveButton: {
    backgroundColor: 'gray',
  },
});

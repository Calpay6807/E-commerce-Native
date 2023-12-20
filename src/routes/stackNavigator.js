import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductList from '../screens/product';
import {CART, PRODUCTLİST, TAB, LOGİN} from '../utils/routes';
import TabNavigator from './tabNavigator';
import Cart from '../screens/cart';
import Login from '../screens/login';
import {useDispatch} from 'react-redux';
import {checkUserLogin} from '../store/actions/authAction';
import Register from '../screens/register';

const Stack = createStackNavigator();
const StackNavigator = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserLogin());
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, headerBackTitle: 'Back'}}>
      <Stack.Screen name={TAB} component={TabNavigator} />
      <Stack.Screen
        options={{headerShown: true}}
        name={CART}
        component={Cart}
      />

      <Stack.Screen
        options={{headerShown: true}}
        name={PRODUCTLİST}
        component={ProductList}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name={LOGİN}
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name={'Register'}
        component={Register}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});

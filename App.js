import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from './src/store';
import StackNavigator from './src/routes/stackNavigator';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ApplicationProvider {...eva} theme={eva.light}>
          <StackNavigator />
        </ApplicationProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});

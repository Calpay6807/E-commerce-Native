import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HOME, PROFİLE, NOTTİFİCATİON, FAVORİTES} from '../utils/routes';
import HomeScreen from '../screens/home';
import Nottification from '../screens/notification';
import Favorites from '../screens/favorite/index';
import ProfileScreen from '../screens/profile/index';

import TabIcon from '../components/rotuter/tabIcon';
import {AppColor} from '../theme/appColor';
import HeaderRight from '../components/rotuter/headerRight';

const Tab = createBottomTabNavigator();
export default function TabNavigator({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerRight: () => (
          <Text>
            <HeaderRight navigation={navigation} />
          </Text>
        ),
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            focused={focused}
            color={color}
            size={size}
            name={route?.name}
          />
        ),
        tabBarActiveTintColor: AppColor.PRİMARY,
        tabBarInactiveTintColor: AppColor.SECONDARY,
      })}>
      <Tab.Screen name={HOME} component={HomeScreen} />
      <Tab.Screen name={FAVORİTES} component={Favorites} />
      <Tab.Screen name={NOTTİFİCATİON} component={Nottification} />
      <Tab.Screen name={PROFİLE} component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});

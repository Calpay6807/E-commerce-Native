import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Heart, Home3, Notification, UserEdit} from 'iconsax-react-native';
import {HOME, NOTTİFİCATİON, PROFİLE, FAVORİTES} from '../../utils/routes';

const TabIcon = ({name, focused, color, size}) => {
  if (name === HOME) {
    return (
      <Home3
        color={color}
        size={size}
        variant={focused ? (variant = 'Broken') : 'Outline'}
      />
    );
  } else if (name === PROFİLE) {
    return (
      <UserEdit
        color={color}
        size={size}
        variant={focused ? (variant = 'Broken') : 'Outline'}
      />
    );
  } else if (name === NOTTİFİCATİON) {
    return <Notification color={color} size={size} />;
  } else if (name === FAVORİTES) {
    return (
      <Heart
        color={color}
        size={size}
        variant={focused ? (variant = 'Bold') : 'Outline'}
      />
    );
  }
};

export default TabIcon;

const styles = StyleSheet.create({});

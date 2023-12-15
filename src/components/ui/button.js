import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppColor} from '../../theme/appColor';

const CostumeButton = props => {
  const {title} = props;
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CostumeButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColor.SECONDARY,
    margin: 5,
  },
  title: {
    color: AppColor.WHİTE,
  },
});

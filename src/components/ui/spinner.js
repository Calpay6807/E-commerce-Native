import {StyleSheet, ActivityIndicator, View} from 'react-native';
import React from 'react';
import {AppColor} from '../../theme/appColor';

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'small'} color={AppColor.PRİMARY} />
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Spinner} from '@ui-kitten/components';

const Spinners = () => {
  return (
    <View style={styles.container}>
      <Spinner />
    </View>
  );
};

export default Spinners;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

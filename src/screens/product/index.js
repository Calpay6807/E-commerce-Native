import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';

export default function ProductList() {
  const route = useRoute();
  const {category} = route.params;
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{category}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

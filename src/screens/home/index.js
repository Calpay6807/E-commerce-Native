import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories, getProductList} from '../../store/actions/homeActions';
import Spinner from '../../components/ui/spinner';
import Productİtem from '../../components/home/productİtem';
import Categoryİtem from '../categories';

export default function HomeScreen() {
  const {pending, categories} = useSelector(state => state?.home);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <View style={styles.container}>
      {pending ? (
        <Spinner />
      ) : categories ? (
        <FlatList
          keyExtractor={item => item}
          data={categories}
          renderItem={({item}) => <Categoryİtem item={item} />}
        />
      ) : (
        <Spinner />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

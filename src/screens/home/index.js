import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProductList} from '../../store/actions/homeActions';
import Spinner from '../../components/ui/spinner';
import Productİtem from '../../components/home/productİtem';

export default function HomeScreen() {
  const {pending, productList} = useSelector(state => state?.home);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList());
  }, []);
  return (
    <View style={styles.container}>
      {pending ? (
        <Spinner />
      ) : productList ? (
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={productList}
          renderItem={({item}) => <Productİtem item={item} />}
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

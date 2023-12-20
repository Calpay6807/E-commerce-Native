import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getProductList} from '../../store/actions/productActions';
import {FlatList} from 'react-native-gesture-handler';
import Productİtem from '../../components/home/productİtem';
import Spinners from '../../components/ui/spinner';

export default function ProductList() {
  const route = useRoute();
  const {category} = route.params;
  const {productList, pending} = useSelector(state => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList({category: category}));
  }, []);
  return (
    <View style={styles.container}>
      {pending ? (
        <Spinners />
      ) : category ? (
        <FlatList
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          data={productList}
          renderItem={({item}) => <Productİtem item={item} />}
        />
      ) : (
        <Spinners />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

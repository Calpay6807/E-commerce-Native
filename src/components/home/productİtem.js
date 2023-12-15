import {Pressable, StyleSheet, Text, View, Image, Alert} from 'react-native';
import React from 'react';
import CostumeButton from '../ui/button';
import {addToCart} from '../../store/actions/homeActions';
import {AppColor} from '../../theme/appColor';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {LOGİN} from '../../utils/routes';

const Productİtem = ({item}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {isLogin} = useSelector(state => state.auth);

  const addChart = () => {
    if (isLogin) {
      dispatch(
        addToCart({
          userId: 3,
          date: 2023 - 12 - 10,
          products: [{productId: 1, quantity: 3}],
        }),
      );
    } else {
      Alert.alert('Giriş Yap', 'Giriş Yaptıktan Sonra Ürünü Alabilirsini', [
        {
          text: 'Giriş Yap',
          onPress: () => navigation.navigate(LOGİN),
        },
        {text: 'Vazgeç', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };
  return (
    <Pressable style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={{
            height: 90,
            width: 90,

            resizeMode: 'contain',
          }}
          source={{uri: item.image}}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text numberOfLines={3} style={styles.desc}>
          {item?.description}
        </Text>
        <CostumeButton title="Sepete Ekle" onPress={addChart} />
      </View>
    </Pressable>
  );
};

export default Productİtem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
    borderWidth: 0.5,
    borderColor: AppColor.SECONDARY,
    flexDirection: 'row',
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
  },
  desc: {
    fontSize: 14,
    fontWeight: '300',
    marginTop: 5,
  },
  infoContainer: {
    flex: 2,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

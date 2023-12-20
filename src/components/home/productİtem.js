import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Dimensions,
} from 'react-native';
import React from 'react';
import CostumeButton from '../ui/button';
import {addToCart} from '../../store/actions/homeActions';
import {AppColor} from '../../theme/appColor';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {LOGİN} from '../../utils/routes';
import {Star} from 'iconsax-react-native';

const {width, height} = Dimensions.get('screen');
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
            height: height / 7,
            width: width / 2 - 20,

            resizeMode: 'contain',
          }}
          source={{uri: item.image}}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {item?.title}
        </Text>
        <Text numberOfLines={4} style={styles.desc}>
          {item?.description}
        </Text>
        {/* <CostumeButton title="Sepete Ekle" onPress={addChart} /> */}
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 15,
        }}>
        <Text style={styles.title}>{item?.price}$</Text>
        <Text style={{marginHorizontal: 15, color: 'gray'}}>
          {item?.rating.rate}
        </Text>
        <Star size={22} color="#ff8b65" variant="Bold" />
      </View>
    </Pressable>
  );
};

export default Productİtem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 5,
    margin: 5,
    borderWidth: 0.5,
    borderColor: AppColor.SECONDARY,
    width: width / 2,
    borderRadius: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  desc: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 5,
    color: 'gray',
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

import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ShoppingCart} from 'iconsax-react-native';
import {AppColor} from '../../theme/appColor';
import {useSelector} from 'react-redux';
import {CART} from '../../utils/routes';

const HeaderRight = ({navigation}) => {
  const {count} = useSelector(state => state?.home);
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate(CART)}>
        <ShoppingCart size={'27'} color={AppColor.PRİMARY} />
        {count > 0 && (
          <View style={styles.count}>
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                textAlign: 'center',
              }}>
              {count}
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  count: {
    position: 'absolute',
    right: -4,
    top: -8,
    backgroundColor: 'blue',
    borderRadius: 100,
    padding: 3,
    width: 15,
    height: 18,
  },
});

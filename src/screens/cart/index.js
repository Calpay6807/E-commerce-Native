import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Button} from '@ui-kitten/components';
import {Login} from 'iconsax-react-native';
import {AppColor} from '../../theme/appColor';
import {LOGİN} from '../../utils/routes';

export default function Cart({navigation}) {
  const {isLogin} = useSelector(state => state?.auth);
  return (
    <View style={styles.container}>
      {isLogin ? (
        <View>
          <Text>giriş yapıldı</Text>
        </View>
      ) : (
        <View style={styles.secondView}>
          <Login size={82} color={AppColor.BLUE} style={{marginVertical: 20}} />
          <Text style={{marginVertical: 20}}>
            Lütfen Alişverişe Devam Etmek İçin Giriş Yapınız...!{' '}
          </Text>
          <Button
            onPress={() => navigation.navigate(LOGİN)}
            style={styles.button}
            appearance="filled">
            Giriş Yap
          </Button>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  secondView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 15,
  },
});

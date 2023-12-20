import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
} from 'react-native';
import React from 'react';
import {ArrowRight2} from 'iconsax-react-native';
import {AppColor} from '../../theme/appColor';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLİST} from '../../utils/routes';

export default function Categoryİtem({item}) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(PRODUCTLİST, {
          category: item,
        })
      }
      style={styles.container}>
      <View
        style={{
          flex: 1,
          padding: 15,
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 22, fontWeight: 'bold', textAlign: 'center'}}>
          {item}
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 12,
        }}>
        <ArrowRight2 style={{color: 'white'}} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('screen').height * 0.18,
    backgroundColor: AppColor.SECONDARY,
    margin: 12,
    borderRadius: 22,
    flexDirection: 'row',
  },
});

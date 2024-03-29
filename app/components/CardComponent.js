import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'native-base';
import {COLORS} from '../../assets/colors';
import Feather from 'react-native-vector-icons/MaterialCommunityIcons';
import {hp, wp} from '../utils/dpTopx';

function CardComponent({cardStyle, cardItem, iconName}) {
  return (
    <View style={[styles.card, cardStyle]}>
      <View style={styles.rectRadius} cardStyle>
        <Feather name={iconName} color="white" size={hp(20)} />
      </View>
      <View style={styles.texts}>
        <Text style={styles.title}>{cardItem.title}</Text>
        <Text style={styles.subtitle}>{cardItem.subtitle}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'yellow',
    width: wp(150),
    height: hp(150),
    borderRadius: 8,
    padding: 10,
  },
  rectRadius: {
    width: wp(40),
    height: hp(40),
    backgroundColor: COLORS.darkCyan,
    borderRadius: hp(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  texts: {
    marginVertical: 10,
  },
  title: {
    // fontFamily: 'Lato-Black',
    marginVertical: 5,
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
  subtitle: {
    // fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: 'white',
  },
});
export default CardComponent;

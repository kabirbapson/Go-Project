import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../../assets/colors';
import {hp, wp} from '../utils/dpTopx';
import Button from './Button';
import ButtonComponent from './ButtonComponent';
import TitleTextComponent from './HeaderTitle';

function HeaderComponent({
  title,
  titleColor,
  onProfilePress,
  featherIconColor,
}) {
  const sendTipsAlert = () => {
    alert('Send tips');
  };

  return (
    <View style={styles.logo}>
      <View style={styles.logoGoFlex}>
        <Image
          style={styles.imageR}
          source={require('../../assets/images/Gs-logo.png')}
        />
        <Text style={[styles.mainTitle, titleColor]}>{title}</Text>
      </View>
      <View style={styles.wrapProfile}>
        <Feather
          style={styles.featherIcon}
          name="bell"
          size={20}
          color={featherIconColor}
        />
        <Feather
          style={styles.featherIcon}
          name="mail"
          size={20}
          color={featherIconColor}
        />
        <TouchableOpacity activeOpacity={0.9} onPress={onProfilePress}>
          <Image
            style={styles.imageP}
            source={require('../../assets/images/kbb.jpg')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  logoGoFlex: {
    flexDirection: 'row',
  },
  imageR: {
    borderRadius: 19,
    height: hp(38),
    width: wp(38),
  },
  imageP: {
    marginHorizontal: 5,
    borderRadius: 15,
  },
  mainTitle: {
    marginTop: hp(5),
    marginLeft: hp(6),
    fontFamily: 'Lato-Black',
    fontSize: 12,
    // color: '#FDC904',
    letterSpacing: 2,
  },
  wrapProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  featherIcon: {
    marginHorizontal: 5,
  },

  headerButtons: {
    flexDirection: 'row',
  },
});
export default HeaderComponent;

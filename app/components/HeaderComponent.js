import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../../assets/colors';
import {hp, wp} from '../utils/dpTopx';
import Button from './Button';
import ButtonComponent from './ButtonComponent';
import TitleTextComponent from './TitleTextComponent';
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
    <View>
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
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    marginLeft: hp(20),
    marginTop: hp(20),
    flexDirection: 'row',
    width: '100%',
  },
  logoGoFlex: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginLeft: hp(170),
    marginTop: hp(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  featherIcon: {
    marginHorizontal: 5,
  },

  headerButtons: {
    flexDirection: 'row',
  },
});
export default HeaderComponent;

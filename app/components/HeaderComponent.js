import {Avatar, Box, Circle, Pressable} from 'native-base';
import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../../assets/colors';
import {hp, wp} from '../utils/dpTopx';
import Button from './Button';
import ButtonComponent from './ButtonComponent';
import TitleTextComponent from './HeaderTitle';

export default function HeaderComponent({
  title,
  titleColor,
  onProfilePress,
  onMessagePress,
  onNotificationPress,
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
        {/* <Pressable onPress={onNotificationPress}>
          <Feather
            style={styles.featherIcon}
            name="bell"
            size={20}
            color={featherIconColor}
          />
        </Pressable> */}
        {/* <Pressable onPress={onMessagePress}>
          <Feather
            style={styles.featherIcon}
            name="mail"
            size={20}
            color={featherIconColor}
          />
        </Pressable> */}

        <Box bg={'#216131'} borderRadius={'full'} p={0.5}>
          <Pressable onPress={onProfilePress}>
            <Avatar
              size={'sm'}
              source={require('../../assets/images/yo.jpg')}
            />
          </Pressable>
        </Box>

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
    height: 38,
    width: 38,
  },
  mainTitle: {
    marginTop: 5,
    marginLeft: 6,
    fontFamily: 'Lato-Black',
    fontSize: 12,
    // color: '#FDC904',
    letterSpacing: 2,
  },
  wrapProfile: {
    // backgroundColor:'#216131',
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featherIcon: {
    marginHorizontal: 5,
  },

  headerButtons: {
    flexDirection: 'row',
  },
});

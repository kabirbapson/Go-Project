import {Avatar, Box, Pressable} from 'native-base';
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function HeaderComponent({title, titleColor, onProfilePress}) {
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
        <Box bg={'#216131'} borderRadius={'full'} p={0.5}>
          <Pressable onPress={onProfilePress}>
            <Avatar
              size={'xs'}
              // source={require('../../assets/images/yo.jpg')}
            >
              <Feather name="info" size={20} color={'blue'} />
            </Avatar>
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
    letterSpacing: 2,
  },
  wrapProfile: {
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

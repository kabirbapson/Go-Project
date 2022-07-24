import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {hp, wp} from '../utils/dpTopx';

export const HeaderTitle = ({textTitle, textStyle}) => {
  return <Text style={[styles.centreText, textStyle]}>{textTitle}</Text>;
};
const styles = StyleSheet.create({
  centreText: {
    fontFamily: 'Lato-Black',
    fontSize: hp(20),
  },
});

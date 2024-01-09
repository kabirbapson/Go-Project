import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {hp, wp} from '../utils/dpTopx';

// const upper
export const HeaderTitle = ({textTitle, textStyle}) => {
  return (
    <Text style={[styles.centreText, textStyle]}>
      {textTitle.toUpperCase()}
    </Text>
  );
};
const styles = StyleSheet.create({
  centreText: {
    fontFamily: 'Lato-Black',
    fontSize: hp(20),
    color: 'black',
    marginBottom: 10,
    marginHorizontal: 10,
  },
});

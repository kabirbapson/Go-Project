import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {hp, wp} from '../utils/dpTopx';

function TitleTextComponent({textTitle, textStyle}) {
  return <Text style={[styles.centreText, textStyle]}>{textTitle}</Text>;
}
const styles = StyleSheet.create({
  centreText: {
    width: '100%',
    fontFamily: 'Lato-Black',
    fontSize: 18,
  },
});
export default TitleTextComponent;

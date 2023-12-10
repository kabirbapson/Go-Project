import {StyleSheet} from 'react-native';
import { Text, Pressable} from 'native-base';
import React from 'react';

function ButtonComponent({title, buttStyle, textStyle, onPress}) {
  return (
    <Pressable style={[styles.butt, buttStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  butt: {
    marginTop: 15,
    marginRight: 7,
    height: 30,
    width: 100,
    borderWidth: 2,
    // backgroundColor: 'blue',
    borderColor: '#F4A261',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    // backgroundColor: 'blue',
  },
  text: {
    fontSize: 16,
    // fontFamily: 'Lato-Bold',
    color: 'white',
  },
});
export default ButtonComponent;

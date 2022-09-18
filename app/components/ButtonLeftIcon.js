import {StyleSheet} from 'react-native';
import {Box, Pressable, Text} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';

export default function ButtonLeftIcon({text, onPress}) {
  return (
    <Pressable
      justifyContent={'space-between'}
      onPress={onPress}
      flexDir={'row'}
      my={2}>
      <Text fontSize={'lg'}
        // fontFamily={'Lato-Regular'}
      >
        {text}
      </Text>
      <Feather name="chevron-right" size={25} />
    </Pressable>
  );
}

const styles = StyleSheet.create({});

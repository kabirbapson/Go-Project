import {StyleSheet} from 'react-native';
import {Box, Pressable, Input} from 'native-base';
import React from 'react';

export const TextInput = ({placeholder}) => {
  return <Input variant="underlined" placeholder={placeholder} />;
};

const styles = StyleSheet.create({});

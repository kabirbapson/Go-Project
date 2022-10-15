import React from 'react';
import {VStack, Avatar, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';

export default function ({iamge, text, onPress}) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <VStack px={1} alignItems={'center'} space="2">
        <Avatar size={'lg'}>AV</Avatar>
        <Text bgColor={'red.400'} fontSize="13" fontWeight={'900'}>
          {text}
        </Text>
      </VStack>
    </TouchableOpacity>
  );
}

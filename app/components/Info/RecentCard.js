import React from 'react';
import {VStack, Avatar, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';

export default function ({image, text, onPress}) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <VStack px={4} alignItems={'center'} space="2">
        <Avatar source={image} size={'lg'} _text={{color:'green.400'}}>GGG</Avatar>
        <Text bgColor={'red.400'} fontSize="15" fontWeight={'500'}>
          {text}
        </Text>
      </VStack>
    </TouchableOpacity>
  );
}

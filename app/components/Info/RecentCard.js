import React from 'react';
import {VStack, Avatar, Text} from 'native-base';

export default function ({iamge, text}) {
  return (
    <VStack alignItems={'center'} space="2">
      <Avatar size={'lg'}>AV</Avatar>
      <Text bgColor={'red.400'} fontSize="13" fontWeight={'900'}>
        Search Text..
      </Text>
    </VStack>
  );
}

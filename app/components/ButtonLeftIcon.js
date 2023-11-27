import {Pressable, Text} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';

export default function ButtonLeftIcon({text, onPress}) {
  return (
    <Pressable
      justifyContent="space-between"
      flexDirection="row"
      alignItems="center"
      padding={4}
      marginY={2}
      borderWidth={1}
      borderRadius="md"
      borderColor="gray.300"
      _pressed={{backgroundColor: 'gray.100'}}
      onPress={onPress}>
      <Text fontSize="md" fontWeight={600}>
        {text}
      </Text>
      <Feather name="chevron-right" size={25} color="black" />
    </Pressable>
  );
}

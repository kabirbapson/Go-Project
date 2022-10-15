import {StyleSheet} from 'react-native';
import {Box, Text, Pressable} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';

export default function LocationSelector({selectedValue, data}) {
  return (
    <Pressable
      borderRadius={'2xl'}
      p={'3'}
      flexDir={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      background={'gray.300'}>
      <Text fontFamily={'Lato-Regular'} fontSize={'md'}>
        {selectedValue ? selectedValue : 'Select a location...'}
      </Text>
      <Feather name="map-pin" color={'black'} size={18} />
    </Pressable>
  );
}

const styles = StyleSheet.create({});

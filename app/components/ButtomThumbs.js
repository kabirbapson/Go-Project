import {Box} from 'native-base';
import React from 'react';
import {Icon} from 'react-native-vector-icons/Icon';
export default function ButtomThumbs() {
  return (
    <Box flexDir={'row'} justifyContent={'center'} alignItems={'center'}>
      <Icon name="location-pin"></Icon>
    </Box>
  );
}

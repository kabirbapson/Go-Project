import {Box} from 'native-base';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

export default function ButtomThumbs() {
  return (
    <Box flexDir={'row'} justifyContent={'center'} alignItems={'center'}>
      <Feather name="map-pin" color={'black'} size={18} />
    </Box>
  );
}

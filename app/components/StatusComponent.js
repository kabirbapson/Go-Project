import {StyleSheet} from 'react-native';
import {
  Box,
  Text,
  Select,
  CheckIcon,
  ScrollView,
  Button,
  Actionsheet,
  Circle,
} from 'native-base';

import React from 'react';
import {hp, wp} from '../utils/dpTopx';

import HeaderBackButton from '../components/HeaderBackButton';
import ButtomThumbs from './ButtomThumbs';
export default function () {
  return (
    <Box
      // h={hp(150)}
      w={'100%'}
      bgColor={'red.300'}
      //   alignItems={'flex-start'}
      flexDir={'row'}
      p={2}>
      <Box>
        <Circle
          style={{
            width: hp(40),
            height: hp(40),
            borderRadius: 20,
            backgroundColor: '#2A9D8F',
          }}></Circle>
      </Box>
      <Box px={2} mr={4}   alignItems={'flex-start'}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis id et,
          aliquam lorem tincidunt egestas at. Interdum pellentesque dolor
          natoque lectus etiam. Morbi quis volutpat sit sit. Et morbi tristique
          nulla id massa. Ac sollicitudin cras suspendisse velit congue. Rhoncus
          arcu.
        </Text>
        <ButtomThumbs />
      </Box>
    </Box>
  );
}

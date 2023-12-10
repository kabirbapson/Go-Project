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
  Avatar,
} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';
import {hp, wp} from '../utils/dpTopx';

import HeaderBackButton from '../components/HeaderBackButton';
import ButtomThumbs from './ButtomThumbs';
export default function ({happenings}) {
  return (
    <Box
      // h={hp(150)}
      w={'100%'}
      // bgColor={'red.300'}
      //   alignItems={'flex-start'}
      flexDir={'row'}
      p={2}>
      <Box>
        <Avatar size={'sm'}>
          <Feather name="activity" size={20} />
        </Avatar>
      </Box>
      <Box px={2} mr={4} alignItems={'flex-start'}>
        <Text fontSize={16} >{happenings}</Text>
        {/* <ButtomThumbs /> */}
      </Box>
    </Box>
  );
}

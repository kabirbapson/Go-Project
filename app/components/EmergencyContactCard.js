import {StyleSheet} from 'react-native';
import {Box, Pressable, Text, Divider, Icon, Button} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';

import ButtonLeftIcon from './ButtonLeftIcon';

export default function EmergencyContactCard({title, data = [], onItemPress}) {
  return (
    <Box p={1}>
      <Text fontWeight={700}
        // fontFamily={'Lato-Bold'}
        fontSize={20}>
        {title}
      </Text>
      <Divider my={1} bg={'#264653'} />
      {data.map(item => (
        <ButtonLeftIcon
          key={item.id}
          text={item.title}
          onPress={() => onItemPress(item)}
        />
      ))}
    </Box>
  );
}

const styles = StyleSheet.create({});

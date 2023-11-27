import {StyleSheet} from 'react-native';
import {Box, Text, Divider} from 'native-base';
import React from 'react';

import ButtonLeftIcon from './ButtonLeftIcon';

export default function EmergencyContactCard({title, data = [], onItemPress}) {
  return (
    <Box p={1} my={2}>
      <Text my={2} fontWeight={700} fontSize={'lg'}>
        {title}
      </Text>
      <Divider my={2} bg={'#264653'} />
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

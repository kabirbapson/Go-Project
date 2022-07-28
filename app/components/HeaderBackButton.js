import {StyleSheet, View} from 'react-native';
import {
  Box,
  Center,
  Text,
  Circle,
  CircleIcon,
  HStack,
  Pressable,
} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';
import {COLORS} from '../../assets/colors';

export default function HeaderBackButton({
  onBackButtonPress,
  headerTitle,
  rightIcon,
}) {
  return (
    <HStack justifyContent={'space-between'} alignItems={'center'}>
      <Center
        w={'10'}
        h={'10'}
        borderRadius={100}
        backgroundColor={'darkBlue.800'}>
        <Pressable onPress={onBackButtonPress}>
          <Feather name="arrow-left" size={25} color={COLORS.white} />
        </Pressable>
      </Center>
      <Text fontFamily={'Lato-Bold'} fontSize={'md'}>
        {headerTitle}
      </Text>
      {rightIcon && rightIcon}
      {!rightIcon && <Box>{'   '}</Box>}
    </HStack>
  );
}

const styles = StyleSheet.create({
  container: {},
});

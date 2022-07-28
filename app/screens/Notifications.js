import {StyleSheet, View} from 'react-native';
import {Box, Text, Center} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';
import {COLORS} from '../../assets/colors';
import HeaderBackButton from '../components/HeaderBackButton';

export default function Notifications({navigation}) {
  const handleBackButton = () => navigation.goBack();

  return (
    <Box flex={'1'} px={'4'} pt={'2'}>
      <HeaderBackButton
        onBackButtonPress={handleBackButton}
        headerTitle={'Notifications'}
      />
      <Center mt={'20'}>
        <Feather name="bell" size={40} color={COLORS.primary} />
        <Text>You have No Notifications</Text>
      </Center>
    </Box>
  );
}

const styles = StyleSheet.create({});

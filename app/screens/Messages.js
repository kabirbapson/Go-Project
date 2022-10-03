import {StyleSheet, View} from 'react-native';
import {Box, Center, Text} from 'native-base';
import React from 'react';
import {COLORS} from '../../assets/colors';
import HeaderBackButton from '../components/HeaderBackButton';
import Feather from 'react-native-vector-icons/Feather';

export default function Messages({navigation}) {
  const handleBackButton = () => navigation.goBack();

  return (
    <Box flex={'1'} p={5}>
      <HeaderBackButton
        onBackButtonPress={handleBackButton}
        headerTitle={'Messages'}
      />
      <Center mt={'20'}>
        <Feather name="mail" size={40} color={COLORS.primary} />
        <Text>You have No Messages</Text>
      </Center>
    </Box>
  );
}

const styles = StyleSheet.create({});

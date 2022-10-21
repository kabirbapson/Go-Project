import {StyleSheet} from 'react-native';
import {
  Box,
  Text,
  Select,
  CheckIcon,
  ScrollView,
  Button,
  Actionsheet,
} from 'native-base';

import React from 'react';

import HeaderBackButton from '../components/HeaderBackButton';
import EmergencyContactCard from '../components/EmergencyContactCard';
import {hp, wp} from '../utils/dpTopx';
import StatusComponent from '../components/StatusComponent';

export default function Status({route, navigation}) {
  const [service, setService] = React.useState('');

  const handleBackButton = () => navigation.goBack();

  return (
    <Box p={'5'}>
      <HeaderBackButton
        headerTitle={"What's Happening"}
        onBackButtonPress={handleBackButton} 
      />
      <Select
        selectedValue={service}
        minWidth="200"
        accessibilityLabel="Select a Location..."
        placeholder="Select a Location..."
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        mb={5}
        onValueChange={itemValue => setService(itemValue)}>
        <Select.Item label="Gombe State" value="gmb" />
        <Select.Item label="Bauchi State" value="bch" />
        <Select.Item label="Borno State" value="brn" />
        <Select.Item label="Yobe State " value="yob" />
        <Select.Item label="Adamawa State " value="adm" />
        <Select.Item label="Taraba State " value="trb" />
      </Select>
      <StatusComponent />
    </Box>
  );
}

const styles = StyleSheet.create({});

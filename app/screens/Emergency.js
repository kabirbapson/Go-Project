import {SafeAreaView, StyleSheet} from 'react-native';
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
import BottomActionSheet from '../components/BottomActionSheet';
import EmergencyDetail from '../components/EmergencyDetail';

const dummyEmergencyData = [
  {
    id: 1,
    title: 'Police Divisions',
    data: [
      {id: 1, title: 'Some Department'},
      {id: 2, title: 'Second Department'},
      {id: 3, title: 'Third Department'},
    ],
  },
  {
    id: 2,
    title: 'Primary Health Care',
    data: [
      {id: 1, title: 'Some Department'},
      {id: 2, title: 'Second Department'},
      {id: 3, title: 'Third Department'},
    ],
  },
];

export default function Emergency({route, navigation}) {
  const [service, setService] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);
  const handleViewEmergencyDetail = emergencyData => {
    setIsOpen(true);
  };

  const handleBackButton = () => navigation.goBack();

  return (
    <SafeAreaView >

    <Box px={'2'} >
      <HeaderBackButton
        headerTitle={'List of emergency contact'}
        onBackButtonPress={handleBackButton}
      />
      <Text mt={'5'}
        // fontFamily={'Lato-Bold'}
        fontSize={'lg'}>
        Location:
      </Text>
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
        <Select.Item label="Gombe State Nigeria..." value="gmb" />
      </Select>
      <ScrollView showsVerticalScrollIndicator={false}>
        {dummyEmergencyData.map(emergencyData => (
          <EmergencyContactCard
            key={emergencyData.id}
            title={emergencyData.title}
            data={emergencyData.data}
            onItemPress={handleViewEmergencyDetail}
          />
        ))}
      </ScrollView>
      {isOpen && (
        <EmergencyDetail isOpen={isOpen} onClose={() => setIsOpen(false)} />
      )}
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

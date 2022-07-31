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

import HeaderBackButton from '../components/HeaderBackButton';
import EmergencyContactCard from '../components/EmergencyContactCard';
import BottomActionSheet from '../components/BottomActionSheet';
import EmergencyDetail from '../components/EmergencyDetail';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

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

export default function Call({route, navigation}) {
  const [department, setDepartment] = React.useState('');
  const [departmentAddress, setDepartmentAddress] = React.useState('');

  const handleBackButton = () => navigation.goBack();

  return (
    <Box p={'5'}>
      <HeaderBackButton
        headerTitle={'Call for Support'}
        onBackButtonPress={handleBackButton}
      />
      {/* select department to call */}
      <Text mt={'5'} fontFamily={'Lato-Bold'} fontSize={'lg'}>
        Department:
      </Text>
      <Select
        selectedValue={department}
        minWidth="200"
        accessibilityLabel="Select Department..."
        placeholder="Select Department..."
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        // mb={5}
        onValueChange={itemValue => setDepartment(itemValue)}>
        <Select.Item label="Hospital" value="hospital" />
        <Select.Item label="Police" value="police" />
        <Select.Item label="Security" value="security" />
      </Select>
      {/* select department location */}
      <Select
        selectedValue={departmentAddress}
        minWidth="200"
        accessibilityLabel="Select location..."
        placeholder="Select department location..."
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        mb={2}
        onValueChange={itemValue => setDepartmentAddress(itemValue)}>
        <Select.Item label="Tudun Wada PHD" value="twadaphc" />
        <Select.Item label="Pantami PHC" value="pantamiphc" />
        <Select.Item label="Idi PHC" value="idiphc" />
      </Select>
      <Box justifyContent={'center'} alignItems="center">
        <Box
          style={{
            width: widthPercentageToDP('90%'),
            height: heightPercentageToDP('5%'),
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
          mt={'2'}
          flexDir="row"
          bg="#264653"
          rounded="lg">
          <Circle
            w={widthPercentageToDP('5%')}
            h={widthPercentageToDP('5%')}
            rounded={'lg'}
            bg="#2A9D8F"></Circle>
          <Text
            marginX={'2'}
            fontSize={'md'}
            fontWeight={'medium'}
            color={'warmGray.50'}
            letterSpacing={'lg'}>
            This is a Box
          </Text>
          <Text
            fontSize={'md'}
            fontWeight={'medium'}
            color={'warmGray.50'}
            letterSpacing={'lg'}>
            767
          </Text>
        </Box>
      </Box>

      <Box justifyContent={'center'} alignItems="center">
        <Box
          style={{
            width: widthPercentageToDP('90%'),
            height: heightPercentageToDP('5%'),
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
          mt={'2'}
          flexDir="row"
          // bg="#264653"
          rounded="lg">
       
          <Text
            marginX={'2'}
            fontSize={'md'}
            fontWeight={'medium'}
            color={'warmGray.50'}
            letterSpacing={'lg'}>
            This is a Box
          </Text>
          <Text
            fontSize={'md'}
            fontWeight={'medium'}
            color={'warmGray.50'}
            letterSpacing={'lg'}>
            767
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({});

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
  FlatList,
  Pressable,
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

const dialPads = [
  {
    id: 1,
    title: 1,
  },
  {
    id: 2,
    title: 2,
  },
  {
    id: 3,
    title: 3,
  },
  {
    id: 4,
    title: 4,
  },
  {
    id: 5,
    title: 5,
  },
  {
    id: 6,
    title: 6,
  },
  {
    id: 7,
    title: 7,
  },
  {
    id: 8,
    title: 8,
  },
  {
    id: 9,
    title: 9,
  },
  {
    id: 10,
    title: '*',
  },
  {
    id: 11,
    title: 0,
  },
  {
    id: 12,
    title: '#',
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
          mb={'2'}
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
            justifyContent: 'center',
          }}
          borderBottomColor={'gray.500'}
          borderBottomWidth={'1'}
          mt={'4'}
          flexDir="row"
          // bg="#264653"
          rounded="lg">
          <Text
            marginX={'2'}
            fontSize={'md'}
            fontWeight={'medium'}
            // color={'warmGray.50'}
            letterSpacing={'lg'}>
            767
          </Text>
          <Text
            position={'absolute'}
            right={'0'}
            marginRight={'4'}
            fontSize={'md'}
            fontWeight={'medium'}
            letterSpacing={'lg'}>
            X
          </Text>
        </Box>
      </Box>
      {/* dialPads */}
      <Box
        alignItems="center"
        // justifyContent={'space-between'}
        bg="purple.50"
        // w={'90%'}
        // mx={'1'}
        // h={heightPercentageToDP('40%')}
      >
        <Box
        // justifyContent="center"
        // p={'1'}
        // justifyContent={'space-between'}
        >
          <FlatList
            numColumns={3}
            data={dialPads}
            keyExtractor={item => item.id}
            // horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <Pressable
                marginX={'8'}
                marginY={1}
                justifyContent={'center'}
                alignItems={'center'}>
                <Button
                  style={{justifyContent: 'center', alignItems: 'center'}}
                  onPress={() => console.log(item.title)}
                  _text={{color: '#264653', fontSize: 20}}>
                  {item.title}
                </Button>
              </Pressable>
            )}
          />
        </Box>

        {/* add some numver dialpad  */}
      </Box>
      <Box
        // mt={'2'}
        mb={'2'}
        // pb={2}
        // justifyContent={'center'}
        // position={'absolute'}
        bottom={'1'}
        // alignItems="center"
        alignSelf={'center'}>
        <Box
          style={{
            width: widthPercentageToDP('90%'),
            height: heightPercentageToDP('5%'),
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
          flexDir="row"
          bg="#264653"
          rounded="lg">
          <Text
            marginX={'2'}
            fontSize={'md'}
            fontWeight={'medium'}
            color={'warmGray.50'}
            letterSpacing={'lg'}>
            Dial
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({});

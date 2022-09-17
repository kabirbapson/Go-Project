import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  View,
} from 'react-native';
import {Box, Pressable, Button, Center, Input, Icon} from 'native-base';
import React from 'react';
import {hp, wp} from '../utils/dpTopx';
import HeaderComponent from '../components/HeaderComponent';
import {COLORS} from '../../assets/colors';
import HeaderBackButton from '../components/HeaderBackButton';

export const RightIcon = ({onPress}) => (
  <Center w={'10'} h={'10'} borderRadius={100} backgroundColor={'darkBlue.800'}>
    <Pressable onPress={onPress}>
      <Feather name="settings" size={20} color={COLORS.white} />
    </Pressable>
  </Center>
);

export default function Location({route, navigation}) {
  const handleRightButtonPress = () => {
    console.log('right button');
  };

  const handleBackButton = () => navigation.goBack();

  return (
    <ImageBackground
      source={require('../../assets/images/map_pant.jpg')}
      blurRadius={1}
      resizeMode="cover"
      style={{flex: 1, justifyContent: 'flex-end'}}>
      <Box flex={1} p={5}>
        <HeaderBackButton
          onBackButtonPress={handleBackButton}
          rightIcon={<RightIcon onPress={handleRightButtonPress} />}
        />

        <Input
          mt={5}
          variant="filled"
          InputLeftElement={
            <Icon
              as={<Feather name="map-pin" />}
              size="md"
              m={2}
              _light={{
                color: 'black',
              }}
              _dark={{
                color: 'gray.300',
              }}
            />
          }
          InputRightElement={
            <Icon
              as={<Feather name="search" />}
              size="md"
              m={2}
              _light={{
                color: 'black',
              }}
              _dark={{
                color: 'gray.300',
              }}
            />
          }
          placeholder="what are you looking for..." // mx={4}
          _light={{
            placeholderTextColor: 'blueGray.400',
          }}
          _dark={{
            placeholderTextColor: 'blueGray.50',
          }}
        />
      </Box>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginHorizontal: hp(20),
    marginTop: hp(20),
    width: wp(322),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(40),
    width: hp(40),
    backgroundColor: '#264653',
    borderRadius: hp(20),
  },
  searchLocation: {
    backgroundColor: '#F4F4F4',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: hp(20),
    width: wp(320),
    height: hp(40),
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchTextInput: {
    height: 30,
    width: 182,
    marginHorizontal: 40,
    padding: 0,
  },
});

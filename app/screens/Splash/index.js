import React, {useEffect} from 'react';
import {Avatar, Box, Image, Text} from 'native-base';
import gMap from '../../../assets/images/GomeMap.png';
import gLogo from '../../../assets/images/GombeLogo.png';
import hhKumo from '../../../assets/images/yo.jpg';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      // Navigate to the dashboard after 1 second
      navigation.replace('HomeBottomBar');
    }, 1000); // 1000 milliseconds = 1 second
  }, []);

  return (
    <Box alignItems={'center'} flex={1}>
      <Image source={gLogo} mt={'3%'} alt="gLogo" h={140} w={140} />

      <Text mt={'2%'} color={'#2A9D8F'} fontSize={20} fontWeight={'black'}>
        GoProject
      </Text>

      <Image
        source={gMap}
        alt="gmap"
        resizeMode="contain"
        w={'100%'}
        h={'45%'}
      />

      <Avatar mt={'7%'} size={'xl'} source={hhKumo} alt="gmap" />
      <Text fontStyle={'italic'} mt={'2%'}>
        Inspired by
      </Text>
      <Text color={'#2A9D8F'} fontSize={20} fontWeight={'black'}>
        Hon. Habib Hassan Kumo
      </Text>
    </Box>
  );
};

export default Splash;

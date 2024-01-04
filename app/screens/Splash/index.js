import React, {useEffect} from 'react';
import {Avatar, Box, Image, Text, VStack} from 'native-base';
import gMap from '../../../assets/images/GomeMap.png';
import gLogo from '../../../assets/images/GombeLogo.png';
import hhKumo from '../../../assets/images/yo.jpg';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeBottomBar');
    }, 1000);
  }, []);

  return (
    <VStack
      bg={'red.100'}
      justifyContent={'space-around'}
      alignItems={'center'}
      flex={1}>
      <Image source={gLogo} mt={'3%'} alt="gLogo" h={140} w={140} />

      {/* <Text mt={'2%'} color={'#2A9D8F'} fontSize={20} fontWeight={'black'}>
        GoProject
      </Text> */}

      <Image
        source={gMap}
        alt="gmap"
        resizeMode="contain"
        w={'100%'}
        h={'55%'}
      />

      {/* <Avatar mt={'7%'} size={'xl'} source={hhKumo} alt="gmap" /> */}
      <Box
        bg={'teal.600'}
        rounded={10}
        w={'full'}
        alignItems={'center'}
        // position={'absolute'}
        // bottom={10}
      >
        <Text>Inspired by Bappi</Text>
        {/* <Text color={'#2A9D8F'} fontSize={20} fontWeight={'black'}>
          Hon. Habib Hassan Kumo
        </Text> */}
      </Box>
    </VStack>
  );
};

export default Splash;

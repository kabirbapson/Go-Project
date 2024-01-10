import React, {useEffect} from 'react';
import {Image, Text, VStack} from 'native-base';
import gMap from '../../../assets/images/GomeMap.png';
import gLogo from '../../../assets/images/GombeLogo.png';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeBottomBar');
    }, 1000);
  }, []);

  return (
    <VStack justifyContent={'space-around'} alignItems={'center'} flex={1}>
      <Image source={gLogo} mt={'3%'} alt="gLogo" h={140} w={140} />
      <Image
        source={gMap}
        alt="gmap"
        resizeMode="contain"
        w={'100%'}
        h={'55%'}
      />
      <Text>Inspired by Bappi</Text>
    </VStack>
  );
};

export default Splash;

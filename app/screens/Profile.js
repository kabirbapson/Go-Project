import React from 'react';
import hhKumo from '../../assets/images/yo.jpg';
import kbb from '../../assets/images/kbb.jpg';

import {Avatar, Box, HStack, ScrollView, Text, VStack} from 'native-base';
import HeaderBackButton from '../components/HeaderBackButton';

export default function Profile({navigation}) {
  const handleBackButton = () => navigation.goBack();

  return (
    <ScrollView flex={1}>
      <Box px={'4'} position={'absolute'} zIndex={2}>
        <HeaderBackButton onBackButtonPress={handleBackButton} />
      </Box>
      <Box alignItems={'center'} m={4}>
        <Text mt={10} fontSize={'xl'} color={'blue.900'} fontWeight={'bold'}>
          Go News
        </Text>
        <VStack mt={2} space={4}>
          <Text>
            About the App Welcome to the Gombe state prominent figures, leaders
            & News App.
          </Text>
          <Text>
            This platform is designed to empower the people of Gombe State with
            comprehensive information about their leaders, senators, local
            government chairmen, representatives, and the state government.
          </Text>
          <Text>
            Our Vision At the core of this app is a commitment to fostering
            transparency, civic engagement, and awareness. We believe that an
            informed citizenry is the foundation of a thriving democracy. By
            providing easy access to information about our leaders and the state
            government, we aim to empower you to actively participate in the
            democratic process.
          </Text>
          <Text fontWeight={900}>Key Features</Text>

          <Text>
            Leader Profiles: Explore detailed profiles of leaders, senators,
            local government chairmen, representatives, and more.
          </Text>

          <Text>
            News Updates: Stay informed with the latest news directly from the
            Gombe State government house, ensuring you are always in the know
            about important developments and initiatives.
          </Text>

          <Text>
            Connect with Your Representatives: Engage with your leaders, share
            your concerns, and participate in the conversations that shape your
            community.
          </Text>

          <Text>
            Our Mission Our mission is to bridge the gap between the people and
            their leaders, fostering a sense of community and shared
            responsibility. By providing a central hub for information, we aim
            to strengthen the bond between citizens and their representatives,
            creating a more engaged and empowered society.
          </Text>
          <Text fontStyle={'italic'}>
            Join us in building a Gombe State where every voice is heard, and
            every citizen is informed. Thank you for being a part of this
            journey toward a more connected and informed community.
          </Text>
        </VStack>

        <HStack>
          <Avatar
            mt={'7%'}
            size={'md'}
            position={'relative'}
            left={3}
            source={hhKumo}
            alt="gmap"
          />
          <Avatar
            mt={'7%'}
            size={'md'}
            // position={'relative'}
            // left={5}
            source={kbb}
            alt="gmap"
          />
        </HStack>
        <Text fontStyle={'italic'} mt={'2%'}>
          Inspired by HHKumo, developed by Bappi
        </Text>
      </Box>
    </ScrollView>
  );
}

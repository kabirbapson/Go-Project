/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {
  Text,
  Box,
  Pressable,
  Center,
  Input,
  Icon,
  Avatar,
  ScrollView,
} from 'native-base';
import {COLORS} from '../../../assets/colors';
import {hp, wp} from '../../utils/dpTopx';
import CardComponent from '../../components/CardComponent';
import HeaderComponent from '../../components/HeaderComponent';
import {HeaderTitle} from '../../components/HeaderTitle';
import ButtonComponent from '../../components/ButtonComponent';
import Feather from 'react-native-vector-icons/Feather';
import InfoSmallCircle from '../../components/InfoSmallCircle';

export default function Info({navigation}) {
  const LatestInfo = [
    {id: 1, cover: 'goje', title: 'Gombe 3G sfggseg rgsger srger'},
    {id: 2, cover: 'goje', title: 'Gombe 3G'},
    {id: 3, cover: 'goje', title: 'Gombe 3G'},
    {id: 4, cover: 'goje', title: 'Gombe 3G fgfg rfgwergfs grfgr'},
  ];

  // const renderItem = () => {
  //   <InfoSmallCircle data={} />
  // }
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <View style={styles.container}> */}
      <Box _text={{color: '#216131'}} style={styles.header}>
        <HeaderComponent
          title={'GOMBE\nINFO'}
          featherIconColor="#216131"
          titleColor={styles.titleColor}
          onProfilePress={() => navigation.navigate('Profile')}
          onMessagePress={() => navigation.navigate('Messages')}
          onNotificationPress={() => navigation.navigate('Notifications')}
        />
      </Box>
      <Center>
        <Box
          // bg={'red.100'}
          w={'60%'}
          // justifyContent={'center'}
          // alignItems={'center'}
        >
          <Text
            textAlign={'center'}
            my={'2'}
            fontFamily={'Lato-Bold'}
            fontSize={'md'}>
            Welcome to Gombe state information desk!
          </Text>
        </Box>
        <Box
          w={'90%'}
          // bg={'red.100'}
        >
          <Input
            placeholder="Search for information..."
            width="100%"
            borderRadius="4"
            py="3"
            px="3"
            fontSize="14"
            InputRightElement={
              <Icon
                m="2"
                ml="3"
                size="6"
                color="gray.400"
                as={<Feather name="search" />}
              />
            }
          />
          <Box my={2}>
            <FlatList
              horizontal={true}
              data={LatestInfo}
              renderItem={({item}) => {
                return (
                  <Box justifyContent={'center'} alignItems={'center'} m={2}>
                    <Avatar
                      size="48px"
                      name={
                        <Feather name="search" color={'red'} size={hp(20)} />
                      }
                      // source={{
                      //   uri: item.cover,
                      // }}
                    />
                    <Text isTruncated maxW={120}>
                      {item.title}
                    </Text>
                  </Box>
                );
              }}
              keyExtractor={item => item.id}
            />
          </Box>
 
          <Box my={2}>
            <FlatList
              data={LatestInfo}
              renderItem={({item}) => {
                return (
                  <InfoSmallCircle title={item.title} subTitile={item.cover} />
                );
              }}
              keyExtractor={item => item.id}
            />
          </Box>
        </Box>
      </Center>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  textEmergencyAssistance: {
    paddingVertical: 10,
  },
  headerTexts: {
    margin: hp(10),
  },
  headTitle: {
    color: COLORS.white,
    marginVertical: hp(10),
    fontSize: 18,
    fontFamily: 'Lato-Bold',
  },
  headSubTitle: {
    color: COLORS.white,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    letterSpacing: 1,
    marginTop: 2,
  },
  headerButtons: {
    flexDirection: 'row',
    marginHorizontal: hp(20),
  },
  titleColor: {
    color: '#216131',
  },
  sendTips: {
    backgroundColor: 'red',
  },
});

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Text,
  Box,
  FlatList,
  Input,
  Icon,
  Avatar,
  VStack,
  Image,
  HStack,
  ScrollView,
} from 'native-base';
import {COLORS} from '../../../assets/colors';
import {hp, wp} from '../../utils/dpTopx';
import HeaderComponent from '../../components/HeaderComponent';
import Feather from 'react-native-vector-icons/Feather';
import InfoSmallCircle from '../../components/InfoSmallCircle';
import logoPng from './../../../assets/images/logopng.png';
import RecentCard from '../../components/Info/RecentCard';

export default function Info({navigation}) {
  const LatestInfo = [
    {id: 1, cover: 'goje', title: 'Gombe 3G sfggseg rgsger srger'},
    {id: 2, cover: 'goje', title: 'Gombe 3G'},
    {id: 3, cover: 'goje', title: 'Gombe 3G'},
    {id: 4, cover: 'goje', title: 'Gombe 3G fgfg rfgwergfs grfgr'},
    {id: 5, cover: 'goje', title: 'Gombe 3G sfggseg rgsger srger'},
    {id: 6, cover: 'goje', title: 'Gombe 3G'},
    {id: 7, cover: 'goje', title: 'Gombe 3G'},
    {id: 8, cover: 'goje', title: 'Gombe 3G fgfg rfgwergfs grfgr'},
  ];

  const RenderRecent = ({}) => <RecentCard />;
  // const RenderSearch = ({}) => <RecentCard />

  // const renderItem = () => {
  //   <InfoSmallCircle data={} />
  // }
  return (
    <Box safeArea flex={1}>
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
      <ScrollView>
        <VStack px="5" space="5" mt="5">
          <Text
            textAlign={'center'}
            px="20"
            fontFamily={'Lato-Bold'}
            fontSize={'md'}>
            Welcome to Gombe state information desk!
          </Text>

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
        </VStack>

        {/* recent card  */}
        <Box py="5" px="5">
          <FlatList
            horizontal={true}
            data={LatestInfo}
            renderItem={({item}) => <RecentCard />}
            keyExtractor={item => item.id}
          />
        </Box>

        {/* searchhh result  */}

        {LatestInfo.map(item => (
          <InfoSmallCircle
            key={item.id}
            title={'Gombe State Government'}
            subTitile={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis scelerisque fusce sed ac faucibus varius magna nisl. Scelerisque eu proin.'
            }
          />
        ))}
      </ScrollView>
    </Box>
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
  otherNewsImage: {
    width: wp(80),
    height: hp(70),
    borderRadius: 10,
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

/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {
  Text,
  Box,
  FlatList,
  Input,
  Icon,
  VStack,
  ScrollView,
} from 'native-base';
import {COLORS} from '../../../assets/colors';
import {hp, wp} from '../../utils/dpTopx';
import HeaderComponent from '../../components/HeaderComponent';
import Feather from 'react-native-vector-icons/Feather';
import InfoSmallCircle from '../../components/InfoSmallCircle';
import logoPng from './../../../assets/images/logopng.png';
import RecentCard from '../../components/Info/RecentCard';

const LatestInfo = [
  {id: 1, cover: 'goje', title: 'Gombe'},
  {id: 2, cover: 'goje', title: 'Gombe 3G'},
  {id: 3, cover: 'goje', title: 'Gombe 3GG'},
  {id: 4, cover: 'goje', title: 'Gombe fgfg'},
  {id: 5, cover: 'goje', title: 'Gombe sfggseg'},
  {id: 6, cover: 'goje', title: 'Gombe 4Gg'},
  {id: 7, cover: 'goje', title: 'Gombe 5Ghh'},
  {id: 8, cover: 'goje', title: 'Gombe rfgwergfs'},
];

export default function Info({navigation}) {
  const [showRecent, setShowRecent] = useState(true);
  const [searchInfo, setSearchInfo] = useState('');
  const [lists, setLists] = useState(LatestInfo);

  const searchPost = text => {
    if (text === '') {
      setLists(LatestInfo)
      setSearchInfo(text)
      return;
    }
    const filt = lists.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase()),
    );
    setLists(filt);
    setSearchInfo(text)
    setShowRecent(false);
    console.log(filt);
    console.log(searchInfo);

  };

  const onBlur = () => {
    if (searchInfo == '') {
      setShowRecent(true);
    }
  };

  useEffect(() => {
    setShowRecent(true);
  }, []);
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
            value={searchInfo}
            onBlur={onBlur}
            onChangeText={e => searchPost(e)}
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
        {showRecent && (
          <Box py="5" px="5">
            <FlatList
              horizontal={true}
              data={LatestInfo}
              renderItem={({item}) => <RecentCard />}
              keyExtractor={item => item.id}
            />
          </Box>
        )}

        {/* searchhh result  */}

        {lists.map(item => (
          <InfoSmallCircle
            key={item.id}
            title={item.cover}
            subTitile={item.title}
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

/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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

const LGA = [
  {
    id: 1,
    name: 'Akko',
    description:
      'Akko is a Local Government Area of Gombe State, Nigeria. Its headquarters are in the town of Kumo. It has an area of 1,938 km² and a population of 265,973 at the 2006 census.',
  },

  {
    id: 2,
    name: 'Balanga',
    description:
      'Balanga is a Local Government Area of Gombe State, Nigeria. Its headquarters are in the town of Billiri. It has an area of 1,938 km² and a population of 265,973 at the 2006 census.',
  },
  {
    id: 3,
    name: 'Billiri',
    description:
      'Billiri is a Local Government Area of Gombe State, Nigeria. Its headquarters are in the town of Billiri. It has an area of 1,938 km² and a population of 265,973 at the 2006 census.',
  },
  {
    id: 4,
    name: 'Dukku',
    description:
      'Dukku is a Local Government Area of Gombe State, Nigeria. Its headquarters are in the town of Dukku. It has an area of 1,938 km² and a population of 265,973 at the 2006 census.',
  },
  {
    id: 5,
    name: 'Funakaye',
    description:
      'Funakaye is a Local Government Area of Gombe State, Nigeria. Its headquarters are in the town of Funakaye. It has an area of 1,938 km² and a population of 265,973 at the 2006 census.',
  },
  {
    id: 6,
    name: 'Gombe',
    description:
      'Gombe is a Local Government Area of Gombe State, Nigeria. Its headquarters are in the town of Gombe. It has an area of 1,938 km² and a population of 265,973 at the 2006 census.',
  },
  {
    id: 7,
    name: 'Kaltungo',
    description:
      'Kaltungo is a Local Government Area of Gombe State, Nigeria. Its headquarters are in the town of Kaltungo. It has an area of 1,938 km² and a population of 265,973 at the 2006 census.',
  },
  {
    id: 8,
    name: 'Kwami',
    description:
      'Kwami is a Local Government Area of Gombe State, Nigeria. Its headquarters are in the town of Kwami. It has an area of 1,938 km² and a population of 265,973 at the 2006 census.',
  },
  {
    id: 9,
    name: 'Nafada',
    description:
      'Nafada is a Local Government Area of Gombe State, Nigeria. Its headquarters are in the town of Nafada .It has an area of 1, 938 km² and a population of 265, 973 at the 2006 census.',
  },
  {
    id: 10,
    name: 'Shongom',
    description:
      'Shongom is a Local Government Area of Gombe State, Nigeria. Its headquarters are in the town of Shongom. It has an area of 1,938 km² and a population of 265,973 at the 2006 census.',
  },
  {
    id: 11,
    name: 'Yamaltu/Deba',
    description:
      'Yamaltu/Deba is a Local Government Area of Gombe State, Nigeria. Its headquarters are in the town of Deba. It has an area of 1,938 km² and a population of 265,973 at the 2006 census.',
  },
];
const knowYourPeople = [
  {
    id: 4,
    name: 'Muhammadu Inuwa Yahaya',
    tenure: '2019-present',
    image: 'https://cdn.vanguardngr.com/wp-content/uploads/2022/03/inuwa.jpg',
    description:
      'Muhammadu Inuwa Yahaya is the current governor of Gombe State, serving from 2019 to the present day. He continues to work on the progress of the state.',
  },
  {
    id: 3,
    name: 'Ibrahim Hassan Dankwambo',
    tenure: '2011-2019',
    image:
      'https://leadership.ng/wp-content/uploads/2022/09/Ibrahim-Dankwambo.jpeg',
    description:
      'Ibrahim Hassan Dankwambo governed Gombe State from 2011 to 2019. He was known for his dedication to education and healthcare development.',
  },

  {
    id: 2,
    name: 'Muhammad Danjuma Goje',
    tenure: '2003-2011',
    image:
      'https://www.channelstv.com/wp-content/uploads/2023/04/Danjuma-Goje.png',
    description:
      "Muhammad Danjuma Goje served as the governor of Gombe State from 2003 to 2011. His leadership had a lasting impact on the state's growth.",
  },

  {
    id: 1,
    name: 'Abubakar Habu Hashidu',
    tenure: '1996-1999',
    image:
      'https://cdn.punchng.com/wp-content/uploads/2018/07/27144948/Abubakar-Hashidu-e1532699427480.jpg',
    description:
      'Abubakar Habu Hashidu was the first civilian governor of Gombe State, serving from 1996 to 1999. He played a significant role in the early development of the state.',
  },
];

export default function Info({navigation}) {
  const [showRecent, setShowRecent] = useState(true);
  const [searchInfo, setSearchInfo] = useState('');
  const [lists, setLists] = useState(knowYourPeople);

  const searchPost = text => {
    if (text === '') {
      setLists(knowYourPeople);
      setSearchInfo(text);
      return;
    }
    const filt = lists.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    setLists(filt);
    setSearchInfo(text);
    setShowRecent(false);
  };

  const onBlur = () => {
    if (searchInfo == '') {
      setShowRecent(true);
    }
  };

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
              data={LGA}
              renderItem={({item}) => (
                <RecentCard
                  onPress={() => navigation.navigate('ReadPost', {post: item})}
                  text={item.name}
                />
              )}
              keyExtractor={item => item.id}
            />
          </Box>
        )}

        {/* searchhh result  */}

        {lists.map(item => (
          <InfoSmallCircle
            onPress={() => navigation.navigate('ReadPost', {post: item})}
            key={item.id}
            img={item.image}
            title={item.name}
            description={item.description}
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

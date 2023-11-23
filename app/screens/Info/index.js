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

const LatestInfo = [
  {
    id: 1,
    story: 'gojess',
    title: 'Gombe',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAIXXe1vXb7TIcYFA7hA-OdmjEsUOl4kzKdg&usqp=CAU',
  },
  {
    id: 2,
    story: 'goje',
    title: 'Gombe 3G',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiD2SyavtfKRJPygOyaXvyQZJO7W1oAsqvWw&usqp=CAU',
  },
  {
    id: 3,
    story: 'goje',
    title: 'Gombe 3GG',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWaeptwyUAimiDG8zjXuHcqf9TmOny-bUqyA&usqp=CAU',
  },
  {
    id: 4,
    story: 'goje',
    title: 'Gombe fgfg',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5sP-wCFFJ4ShW_9B2lR8Oqh3IUxqNBMranw&usqp=CAU',
  },
  {
    id: 5,
    story: 'goje',
    title: 'Gombe sfggseg',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfb-2pNLxHgalLq4NMOZyZppfSI8y7UxfHeA&usqp=CAU',
  },
  {
    id: 6,
    story: 'goje',
    title: 'Gombe 4Gg Gombe 4Gg Gombe 4Gg Gombe 4Gg',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6tFeHEa2KY-JAEgrcbGe_iL4fWRcWlXZ4g&usqp=CAU',
  },
  {
    id: 7,
    story: 'goje',
    title: 'Gombe 5Ghh',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGHIJjR-nq-GT3HzK9bXmAcKXSzFHLpm08Q&usqp=CAU',
  },
  {
    id: 8,
    story: 'goje',
    title: 'Gombe rfgwergfs',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAIXXe1vXb7TIcYFA7hA-OdmjEsUOl4kzKdg&usqp=CAU',
  },
];

export default function Info({navigation}) {
  const [showRecent, setShowRecent] = useState(true);
  const [searchInfo, setSearchInfo] = useState('');
  const [lists, setLists] = useState(LatestInfo);

  const searchPost = text => {
    if (text === '') {
      setLists(LatestInfo);
      setSearchInfo(text);
      return;
    }
    const filt = lists.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase()),
    );
    setLists(filt);
    setSearchInfo(text);
    setShowRecent(false);
    console.log(filt);
    console.log(searchInfo);
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
              data={LatestInfo}
              renderItem={({item}) => (
                <RecentCard
                  onPress={() => console.log(item.id)}
                  text={item.title}
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
            img={item.img}
            title={item.title}
            story={item.story}
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

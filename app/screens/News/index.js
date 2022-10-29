import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Spinner, Box, Skeleton, VStack, Center, FlatList} from 'native-base';
import {COLORS} from '../../../assets/colors';
import {hp, wp} from '../../utils/dpTopx';

import HeaderComponent from '../../components/HeaderComponent';
import NewsSmallCard from '../../components/NewsSmallCard';
import {HeaderTitle} from '../../components/HeaderTitle';

import {useSelector, useDispatch} from 'react-redux';
import {fetchNewsPost} from '../../features/news/newsSlice';
import NewsFeaturing from '../../components/NewsFeaturing';

export default function News({navigation}) {
  const {post, loading} = useSelector(state => state.news);
  const randoPost = Math.floor(Math.random() * 3)
  console.log(randoPost)
  const featuring = post[randoPost];
  const dispatch = useDispatch();

  console.log(post.length);

  React.useEffect(() => {
    dispatch(fetchNewsPost());
  }, [dispatch]);

  const handleNewsClick = postData => {
    navigation.navigate('NewsPost', {postData});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <HeaderComponent
          title={'GOMBE\nNEWS'}
          titleColor={styles.titleColor}
          featherIconColor="#216131"
          onProfilePress={() => navigation.navigate('Profile')}
        />
        {loading ? (
          <Center>
            <Spinner mt="10" size={'sm'} />
          </Center>
        ) : (
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            {/* header title */}
            <HeaderTitle textTitle={'Breaking News'} />

            {/* latestNews */}
            {featuring && (
              <NewsFeaturing data={featuring} onPress={handleNewsClick} />
            )}
            {/* section card */}

            {post.length  > 0 &&
              post.map(newsPost => (
                <NewsSmallCard
                  key={newsPost.id}
                  data={newsPost}
                  onPress={handleNewsClick}
                />
              ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F8F9FA',
    paddingHorizontal: hp(20),
    paddingTop: 20,
  },
  titleColor: {
    color: '#216131',
  },
  header: {
    width: '100%',
    paddingHorizontal: hp(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scrollView: {
    marginTop: hp(20),
  },
  textTitleEA: {},
});

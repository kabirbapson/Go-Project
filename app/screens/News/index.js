import React from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {Spinner, Center, Text, Button} from 'native-base';
import {hp} from '../../utils/dpTopx';

import HeaderComponent from '../../components/HeaderComponent';
import NewsSmallCard from '../../components/NewsSmallCard';
import {HeaderTitle} from '../../components/HeaderTitle';

import {useSelector, useDispatch} from 'react-redux';
import {fetchPosts} from '../../features/news/newsSlice';
import NewsFeaturing from '../../components/NewsFeaturing';

export default function News({navigation}) {
  const {posts, loading} = useSelector(state => state.news);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchPosts());
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
            <Spinner mt="10" size={'lg'} />
          </Center>
        ) : (
          <ScrollView style={styles.scrollView}>
            {/* header title */}

            {posts?.length > 0 ? (
              <>
                <HeaderTitle textTitle={'Latest News'} />
                <NewsFeaturing data={posts[0]} onPress={handleNewsClick} />
                {posts.slice(0, 10).map(newsPost => (
                  <NewsSmallCard
                    key={newsPost.id}
                    data={newsPost}
                    onPress={handleNewsClick}
                  />
                ))}
              </>
            ) : (
              <Center mt={'20%'}>
                <Text color={'red.400'} fontSize={18}>
                  Please check your internet conection
                </Text>
                <Button
                  variant={'ghost'}
                  onPress={() => navigation.navigate('HomeBottomBar')}>
                  Try again
                </Button>
              </Center>
            )}
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
    // backgroundColor: 'red',
    // flexGrow: 1,
  },
  textTitleEA: {},
});

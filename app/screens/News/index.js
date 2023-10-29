import React from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {Spinner, Box, Center, Text} from 'native-base';
import {hp} from '../../utils/dpTopx';

import HeaderComponent from '../../components/HeaderComponent';
import NewsSmallCard from '../../components/NewsSmallCard';
import {HeaderTitle} from '../../components/HeaderTitle';

import {useSelector, useDispatch} from 'react-redux';
import {fetchPost} from '../../features/news/newsSlice';
import NewsFeaturing from '../../components/NewsFeaturing';
import axios from 'axios';

export default function News({navigation}) {
  const {post, loading} = useSelector(state => state.news);
  // const randoPost = Math.floor(Math.random() * 3)
  console.log('from home', post, loading);
  // const featuring = post[0];
  const dispatch = useDispatch();

  React.useEffect(() => {
    // dispatch(fetchPost());
    axios
      .get('http://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log({res});
      })
      .catch(err => {
        console.log({err});
      });
    console.log('dfd');
  }, []);

  React.useEffect(() => {
    axios
      .get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        // Handle successful response here
        console.log('Data:', response.data);
        // Dispatch an action if necessary to store the data in your Redux state
      })
      .catch(error => {
        // Handle error here
        console.error('Error:', error);
        // You can also set an error state or display an error message to the user
      });
    console.log('object');
  }, []);

  const handleNewsClick = postData => {
    navigation.navigate('NewsPost', {postData});
    console.log(postData);
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
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={true}>
            {/* header title */}
            <HeaderTitle textTitle={'Latest News'} />

            {post?.length > 0 && (
              <>
                <NewsFeaturing data={post[0]} onPress={handleNewsClick} />
                {post.slice(0, 10).map(newsPost => (
                  <NewsSmallCard
                    key={newsPost.id}
                    data={newsPost}
                    onPress={handleNewsClick}
                  />
                ))}
              </>
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

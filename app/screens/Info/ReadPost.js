import {StyleSheet, View, ImageBackground, SafeAreaView} from 'react-native';
import {Box, Image, Text, ScrollView} from 'native-base';
import React from 'react';
import HeaderBackButton from '../../components/HeaderBackButton';
import logoPng from './../../../assets/images/logopng.png';
import yo from '../../../assets/images/yo.jpg';

export default function ReadPost({route, navigation}) {
  const {post} = route.params;

  const handleBackButton = () => navigation.goBack();

  if (!post) {
    return (
      <SafeAreaView style={styles.container}>
        <Box p={'4'} position={' absolute'} zIndex={2}>
          <HeaderBackButton onBackButtonPress={handleBackButton} />
        </Box>
        <Box
          flex={1}
          justifyContent={'center'}
          alignItems={'center'}
          bgColor={'white'}>
          <Image
            source={logoPng}
            alt="logo"
            width={200}
            height={200}
            resizeMode={'contain'}
          />
          <Text fontSize={'lg'}>No Post Found</Text>
        </Box>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Box p={'4'} position={'relative'} zIndex={2}>
        <HeaderBackButton onBackButtonPress={handleBackButton} />
      </Box>
      {post && (
        <ScrollView>
          {/* <Image
            rounded={8}
            source={{uri: post?.img}}
            resizeMode={'contain'}
            alt="cover image"
            width={'100%'}
            height={250}
          /> */}


        <Box p={'4'} bgColor={'white'}>
          <Text fontSize={'xl'} mb={'4'}>
            {post.title}
          </Text>
          <Text
            fontSize={'lg'}
            fontStyle={'italic'}
            color={'gray.500'}
            mb={'10'}>
            {post.story} 
          </Text>
          <Text fontSize={'md'}>By Hon. HH Kumo</Text>
        </Box>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

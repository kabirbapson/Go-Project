import {StyleSheet, View, ImageBackground, SafeAreaView} from 'react-native';
import {Box, Image, Text, ScrollView} from 'native-base';
import React from 'react';
import HeaderBackButton from '../../components/HeaderBackButton';
import logoPng from './../../../assets/images/logopng.png';

export default function ReadPost({route, navigation}) {
  const {post} = route.params;
  console.log(post);
  const handleBackButton = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.container}>
      <Box p={'4'} position={'absolute'} zIndex={2}>
        <HeaderBackButton onBackButtonPress={handleBackButton} />
      </Box>
      <ScrollView>
        <Image
          rounded={8}
          source={{uri: post.img}}
          resizeMode={' contain'}
          alt="cover image"
          width={'100%'}
          height={250}
        />

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

import {StyleSheet, View, ImageBackground, SafeAreaView} from 'react-native';
import {Box, Image, Text, ScrollView} from 'native-base';
import React from 'react';
import HeaderBackButton from '../../components/HeaderBackButton';
import logoPng from './../../../assets/images/logopng.png';
import yo from '../../../assets/images/yo.jpg';
import GombeLogo from '../../../assets/images/GombeLogo.png';
export default function ReadPost({route, navigation}) {
  const {post} = route.params;

  const handleBackButton = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.container}>
      <Box p={'4'} position={'relative'} zIndex={2}>
        <HeaderBackButton onBackButtonPress={handleBackButton} />
      </Box>
      {post && (
        <ScrollView>
          <Image
            rounded={8}
            // source={{ uri: post?.image ? post.image : GombeLogo }}
            source={
              post?.image
                ? post.image.length
                  ? {uri: post.image}
                  : GombeLogo
                : GombeLogo
            }
            resizeMode={'contain'}
            alt={post.name}
            width={'100%'}
            height={200}
          />

          <Box p={'4'} bgColor={'white'}>
            <Text fontSize={'xl'} mb={'4'}>
              {post.name} {post.tenure && `- ${post.tenure}`}
            </Text>
            <Text
              fontSize={'lg'}
              fontStyle={'italic'}
              color={'gray.500'}
              mb={'10'}>
              {post.description}
            </Text>
            <Text fontStyle={'italic'} fontSize={'md'}>
              By Hon. HH Kumo
            </Text>
          </Box>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import {
  StyleSheet,
  View,
  ImageBackground,
  useWindowDimensions,
} from 'react-native';
import {Box, Image, Text, ScrollView, Divider} from 'native-base';
import React from 'react';
import HeaderBackButton from '../components/HeaderBackButton';
import yo from '../../assets/images/yo.jpg';
import RenderHTML from 'react-native-render-html';

export default function NewsPost({route, navigation}) {
  const {postData} = route.params;
  const handleBackButton = () => navigation.goBack();
  console.log({postData});
  const {width} = useWindowDimensions();
  const source = postData.content;
  return (
    <View style={styles.container}>
      <Box px={'4'} position={'absolute'} zIndex={2}>
        <HeaderBackButton onBackButtonPress={handleBackButton} />
      </Box>
      <ScrollView>
        <Image
          source={
            postData?.featuredImage?.node?.sourceUrl
              ? {uri: postData.featuredImage.node.sourceUrl}
              : yo
          }
          resizeMode={'stretch'}
          alt="cover image"
          width={'100%'}
          height={250}
        />

        <Box p={'4'} bg={'white'} flex="1" roundedTop={30}>
          <Text fontSize={'xl'} mb={'4'} fontWeight={900} color={'green.900'}>
            {postData.title}
          </Text>
          <Divider h={0.5} w={'90%'} bg={'yellow.500'} alignSelf={'center'} />
          <RenderHTML
            contentWidth={width}
            source={{html: postData.content}}
            enableExperimentalMarginCollapsing={true}
            baseStyle={{
              color: '#15181E',
              textAlign: 'justify',
              fontSize: '16px',
              lineHeight: 24,
            }}
          />
          {/* <RenderHTML source={postData.content} /> */}
          {/* <Text
            fontSize={'lg'}
            fontStyle={'italic'}
            color={'gray.500'}
            mb={'10'}>
            {postData.content}
          </Text> */}
          <Text alignSelf={'center'} fontStyle={'italic'} fontSize={'sm'}>
            by HHKumo
          </Text>
        </Box>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});

import {StyleSheet, View, ImageBackground} from 'react-native';
import {Box, Image, Text, ScrollView} from 'native-base';
import React from 'react';
import HeaderBackButton from '../components/HeaderBackButton';

export default function NewsPost({route, navigation}) {
  const {postData} = route.params;
  const handleBackButton = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <Box px={'4'} position={'absolute'} zIndex={2}>
        <HeaderBackButton onBackButtonPress={handleBackButton} />
      </Box>
      <ScrollView>
        <Image
          source={{uri: postData.imageUrl}}
          resizeMode={'cover'}
          alt="cover image"
          width={'100%'}
          height={250}
        />

        <Box p={'4'} bg={'white'} flex="1" roundedTop={30}>
          <Text fontSize={'xl'} mb={'4'}>
            {postData.title}
          </Text>
          <Text
            fontSize={'lg'}
            fontStyle={'italic'}
            color={'gray.500' }
            mb={'10'}>
            {postData.subtitle}
          </Text>
          <Text fontSize={'md'}>{postData.post_content}</Text>
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

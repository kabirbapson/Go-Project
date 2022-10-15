import {StyleSheet, View, Image, Pressable} from 'react-native';
import React from 'react';
import {hp, wp} from '../utils/dpTopx';
import {Box, HStack, Text, VStack} from 'native-base';
import logoPng from './../../assets/images/logopng.png';
export default function InfoSmallCircle({title, story, img, onPress}) {
  return (
    <Box>
      <Pressable style={styles.otherNews} onPress={onPress}>
        <Box
          p="1"
          w={'100%'}
          bg={'coolGray.50'}
          rounded={5}
          shadow={0.5}
          borderWidth={0.3}
          borderColor={'coolGray.300'}>
          <HStack justifyContent={'space-between'} alignItems={'center'}>
            <Box
              m={1}
              rounded={5}
              w={wp(100)}
              h={hp(120)}
              justifyContent={'center'}
              alignItems={'center'}
              // bg={'red.100'}
            >
              <Image
                borderRadius={10}
                resizeMode="contain"
                style={styles.otherNewsImage}
                // source={img}
                source={{uri: img}}
              />
            </Box>
            <Box
              w={'68%'}
              // bg={'red.100'}
              // justifyContent={'center'}
              // alignItems={'center'}
              mx={1}>
              <VStack p={1}
                // justifyContent={'center'} alignItems={'center'}
              >
                <Text
                  // position={'absolute'}
                  zIndex={100}
                  my={2}
                  bold
                  numberOfLines={1}
                  fontSize={16}
                  fontWeight={700}>
                  {title}
                </Text>
                <Text px={1} color={'#898A8D'} fontSize={13} numberOfLines={4}>
                  {story}
                </Text>
              </VStack>
            </Box>
          </HStack>
        </Box>
      </Pressable>
    </Box>
  );
}

const styles = StyleSheet.create({
  otherNews: {
    flexDirection: 'row',
    padding: 10,
  },
  otherNewsImage: {
    width: wp(80),
    height: hp(70),
    borderRadius: 10,
  },
  otherNewsText: {
    flex: 1,
    paddingHorizontal: 7,
  },
});

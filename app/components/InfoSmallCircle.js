import {StyleSheet, View, Image, Pressable} from 'react-native';
import React from 'react';
import {hp, wp} from '../utils/dpTopx';
import {Box, HStack, Text, VStack} from 'native-base';
import logoPng from './../../assets/images/logopng.png';
export default function InfoSmallCircle({title, subTitile, onPress}) {
  return (
    <Box >
      <Pressable style={styles.otherNews} onPress={() => onPress}>
        <Box
          p="1"
          w={'100%'}
          // bg={'red.400'}
          rounded={10}
          shadow={4}
          borderWidth="1"
          borderColor={'coolGray.300'}
        >
          <HStack justifyContent={'space-between'} alignItems={'center'}>
            <Box
              rounded={10}
              w={wp(100)}
              h={hp(120)}
              justifyContent={'center'}
              alignItems={'center'}
            // bg={'white'}
            >
              <Image
                resizeMode="contain"
                style={styles.otherNewsImage}
                source={logoPng}
              />
            </Box>
            <Box
              w={'68%'}
              // bg={'red.100'}
              justifyContent={'center'}
              alignItems={'center'}
              mx={2}>
              <VStack p={1} justifyContent={'center'} alignItems={'center'}>
                <Text
                  // position={'absolute'}
                  zIndex={100}
                  mt={2} 
                  bold
                  fontSize={16}
                  fontWeight={700}>
                  {title}
                </Text>
                <Text px={1} fontSize={13} numberOfLines={4}>
                  {subTitile}
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

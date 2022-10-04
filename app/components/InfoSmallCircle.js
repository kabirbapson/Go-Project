import {StyleSheet, View, Image, Pressable} from 'react-native';
import React from 'react';
import {hp, wp} from '../utils/dpTopx';
import {Box, Text, VStack} from 'native-base';
import logoPng from './../../assets/images/logopng.png';
export default function InfoSmallCircle({title, subTitile, onPress}) {
  return (
    <View style={{marginTop: hp(28)}}>
      <Pressable style={styles.otherNews} onPress={() => onPress}>
        <Image
          resizeMode="contain"
          style={styles.otherNewsImage}
          source={logoPng}
        />

        <Box justifyContent={'center'} alignItems={'center'} m={2}>
          <Text>{title}</Text>
          <Text>{subTitile}</Text>
        </Box>
      </Pressable>
    </View>
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

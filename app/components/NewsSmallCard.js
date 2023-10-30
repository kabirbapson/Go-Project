import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {hp, wp} from '../utils/dpTopx';
import yo from '../../assets/images/yo.jpg';

export default function NewsSmallCard({data, onPress}) {
  return (
    <View style={{marginTop: hp(28)}}>
      <Pressable style={styles.otherNews} onPress={() => onPress(data)}>
        <Image
          // resizeMode="contain"
          style={styles.otherNewsImage}
          // source={{uri: data.imageUrl}}
          source={yo}
        />

        <View style={styles.otherNewsText}>
          <Text style={{color: 'black', fontWeight: '600'}}>{data.title}</Text>
          <Text style={styles.readMore}>read more...</Text>
        </View>
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
  readMore: {
    color: '#000000',
    paddingHorizontal: 7,
    position: 'absolute',
    bottom: 3,
    fontSize: 16,
    fontWeight: '200',
  },
});

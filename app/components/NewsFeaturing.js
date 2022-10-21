import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  Pressable,
} from 'react-native';
import React from 'react';
import {hp, wp} from '../utils/dpTopx';

export default function NewsFeaturing({data, onPress}) {
  return (
    <View style={styles.latestNews}>
      <Pressable activeOpacity={0.7} onPress={() => onPress(data)}>
        <Image
          resizeMode="contain"
          style={styles.imageP}
          source={{uri: data.imageUrl}} 
        />
        <Text style={styles.topNews}>{data.title}</Text>
        <Text style={styles.topNewsSum}>{data.subtitle}</Text>
        <View style={styles.topNewsBottomText}>
          <Text style={styles.topNewsBottomTextStyle}>read more... *</Text>
          <Text style={styles.topNewsBottomTextStyle}>4 min read *</Text>
          <Text style={styles.topNewsBottomTextStyle}>47k comment</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  latestNews: {
    padding: 14,
    backgroundColor: '#F8F9FA',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 3,
  },
  imageP: {
    width: wp(290),
    height: hp(170),
    borderRadius: 10,
  },
  topNews: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: '#000',
    marginTop: hp(10),
  },
  topNewsSum: {
    marginTop: hp(5),
    fontFamily: 'Lato-Italic',
    fontSize: 11,
    color: '#4E4D4D',
  },
  topNewsBottomText: {
    flexDirection: 'row',
    marginTop: 5,
  },
  topNewsBottomTextStyle: {
    fontSize: 11,
    paddingHorizontal: 15,
    // marginHorizontal: 10,
  },
});

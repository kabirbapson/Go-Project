import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {hp, wp} from '../utils/dpTopx';
import yo from '../../assets/images/yo.jpg';
import RenderHTML from 'react-native-render-html';

export default function NewsFeaturing({data, onPress}) {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.latestNews}>
      <Pressable activeOpacity={0.7} onPress={() => onPress(data)}>
        <Image
          resizeMode="contain"
          style={styles.imageP}
          // source={{uri: data.imageUrl}}
          source={
            data?.featuredImage?.node?.sourceUrl
              ? {uri: data.featuredImage.node.sourceUrl}
              : yo
          }
        />
        <Text style={styles.topNews}>{data.title}</Text>
        <Text numberOfLines={1} style={styles.topNewsSum}>
          by Bappi Kabir
        </Text>
        <View style={styles.topNewsBottomText}>
          <Text
            style={[
              styles.topNewsBottomTextStyle,
              {color: '#2A9D8F', marginLeft: -8},
            ]}>
            read more... *
          </Text>
          <Text style={[styles.topNewsBottomTextStyle, {color: '#B8C9C0'}]}>
            4 min read *
          </Text>
          <Text style={[styles.topNewsBottomTextStyle, {color: '#B8C9C0'}]}>
            47k comment
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  latestNews: {
    padding: 12,
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
    // backgroundColor: 'yellow',
    // justifyContent: 'space-between',
  },
  topNewsBottomTextStyle: {
    fontSize: 12,
    paddingHorizontal: 10,
    // marginHorizontal: 10,
  },
});

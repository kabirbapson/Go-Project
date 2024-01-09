import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {hp, wp} from '../utils/dpTopx';
import yo from '../../assets/images/yo.jpg';

export default function NewsSmallCard({data, onPress}) {
  return (
    <View style={{marginTop: 20}}>
      <Pressable style={styles.otherNews} onPress={() => onPress(data)}>
        <Image
          // resizeMode="contain"
          style={styles.otherNewsImage}
          source={
            data?.featuredImage?.node?.sourceUrl
              ? {uri: data.featuredImage.node.sourceUrl}
              : yo
          }
        />

        {/* <Image
          style={styles.otherNewsImage}
          source={{uri: data?.featuredImage?.node?.sourceUrl || yo}}
          // source={yo}
        /> */}

        <View style={styles.otherNewsText}>
          <Text
            numberOfLines={2}
            style={{lineHeight: 18, color: 'black', fontWeight: '600'}}>
            {data.title}
          </Text>
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
    borderRadius: 10,
    backgroundColor: '#F8F9FA',
    // borderRadius: 20,
    // shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
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
    bottom: 0,
    fontSize: 16,
    fontWeight: '200',
  },
});

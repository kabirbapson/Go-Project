import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import {COLORS} from '../../assets/colors';
import {hp, wp} from '../utils/dpTopx';
import CardComponent from '../components/CardComponent';
import HeaderComponent from '../components/HeaderComponent';
import {HeaderTitle} from '../components/HeaderTitle';

export default function GoNews({navigation}) {
  return (
    <View style={styles.container}>
      <HeaderComponent
        title={'GOMBE\nNEWS'}
        titleColor={styles.titleColor}
        featherIconColor="#216131"
        onProfilePress={() => navigation.navigate('Profile')}
      />
      <ScrollView style={styles.scrollView}>
        {/* header title */}
        <HeaderTitle textTitle={'Breaking News'} />

        {/* latestNews */}
        <View style={styles.latestNews}>
          <TouchableOpacity activeOpacity={0.7}>
            <Image
              resizeMode="contain"
              style={styles.imageP}
              source={require('../../assets/images/kbb.jpg')}
            />
            <Text style={styles.topNews}>
              Governor Inuwa Yahaya exceeding expectations in Gombe
            </Text>
            <Text style={styles.topNewsSum}>
              As far as Gombe is concerned, there is no vacancy in the Jewel in
              the Savannah. We want the Governor to come back in order to
              consolidate what he started...
            </Text>
            <View style={styles.topNewsBottomText}>
              <Text style={styles.topNewsBottomTextStyle}>read more... *</Text>
              <Text style={styles.topNewsBottomTextStyle}>4 min read *</Text>
              <Text style={styles.topNewsBottomTextStyle}>47k comment</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* section card */}
        <View style={{marginTop: hp(28)}}>
          <TouchableOpacity style={styles.otherNews}>
            <Image
              resizeMode="contain"
              style={styles.otherNewsImage}
              source={require('../../assets/images/kbb.jpg')}
            />

            <View style={styles.otherNewsText}>
              <Text>
                Gombe politics: After months of bickering, Gov Yahaya, Goje
                reconcile
              </Text>
              <Text>read more...</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  titleColor: {
    color: '#216131',
  },
  header: {
    width: '100%',
    paddingHorizontal: hp(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scrollView: {
    marginTop: hp(20),
  },
  textTitleEA: {},
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

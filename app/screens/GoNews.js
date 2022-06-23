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
import TitleTextComponent from '../components/TitleTextComponent';

function GoNews({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderComponent
          title={'GOMBE\nNEWS'}
          titleColor={styles.titleColor}
          featherIconColor="#216131"
          onProfilePress={() => navigation.navigate('Profile')}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <View>
          <TitleTextComponent
            textStyle={styles.textTitleEA}
            textTitle={'Welcome to Gombe State Government \nNews & Updates'}
          />
        </View>
        <View style={styles.centreNews}>
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
                As far as Gombe is concerned, there is no vacancy in the Jewel
                in the Savannah. We want the Governor to come back in order to
                consolidate what he started...
              </Text>
              <View style={styles.topNewsBottomText}>
                <Text style={styles.topNewsBottomTextStyle}>
                  read more... *
                </Text>
                <Text style={styles.topNewsBottomTextStyle}>4 min read *</Text>
                <Text style={styles.topNewsBottomTextStyle}> 47k comment</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <View>
              <TouchableOpacity style={styles.otherNews}>
                <View>
                  <Image
                    resizeMode="contain"
                    style={styles.otherNewsImage}
                    source={require('../../assets/images/kbb.jpg')}
                  />
                </View>
                <View style={styles.otherNewsText}>
                  <Text>
                    Gombe politics: After months of bickering, Gov Yahaya, Goje
                    reconcile
                  </Text>
                  <Text>read more...</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.otherNews}>
                <Image
                  resizeMode="contain"
                  style={styles.otherNewsImage}
                  source={require('../../assets/images/kbb.jpg')}
                />
                <Text>Gombe Politics: Ex-Rep quits APC</Text>
                <Text>read more...</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    flex: 1,
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
    width: wp(360),
    paddingTop: 10,
    // backgroundColor: 'red',
  },
  textTitleEA: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Lato-Medium',
    textAlign: 'center',
  },
  centreNews: {
    alignItems: 'center',
  },
  latestNews: {
    padding: 10,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'dodgerblue',
    width: wp(310),
    height: hp(330),
    // borderWidth: 1,
    borderRadius: 5,
    shadowColor: '#B8C9C0',
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
  },
  otherNewsImage: {
    width: wp(80),
    height: hp(70),
    borderRadius: 10,
  },
  otherNewsText: {
    flexDirection: 'column',
  },
});
export default GoNews;

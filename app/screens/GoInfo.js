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

function GoInfo({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderComponent
          title={'GOMBE\nINFO'}
          titleColor={styles.titleColor}
          featherIconColor="#216131"
          onProfilePress={() => navigation.navigate('Profile')}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <View>
          <TitleTextComponent
            textStyle={styles.textTitleEA}
            textTitle={'Welcome to Gombe State Government \nAdministration'}
          />
        </View>
        <View>
          <TouchableOpacity>
            <Text>hyyyeye</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <Text>VIEW SOME NEWS HERE</Text>
          </TouchableOpacity>
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
    width: 360,
    paddingTop: 10,
  },
  textTitleEA: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Lato-Medium',
    textAlign: 'center',
  },
});
export default GoInfo;

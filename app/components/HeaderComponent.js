import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../../assets/colors';
import {hp, wp} from '../utils/dpTopx';
import Button from './Button';
import ButtonComponent from './ButtonComponent';
import TitleTextComponent from './TitleTextComponent';
function HeaderComponent(props) {
  const sendTipsAlert = () => {
    alert('Send tips');
  };

  return (
    <View>
      <View style={styles.logo}>
        <View style={styles.logoNEDC}>
          <Image
            style={styles.imageR}
            source={require('../../assets/images/logopng.png')}
          />
          <Text style={styles.nedcA}>{'NEDC\nALERT'}</Text>
        </View>
        <View style={styles.wrapProfile}>
          {/* <View style={styles.featherIcon}> */}
          <Feather style={styles.featherIcon} name="bell" size={30} />
          <Feather style={styles.featherIcon} name="mail" size={30} />
          {/* </View> */}
          <Image
            style={styles.imageP}
            source={require('../../assets/images/kbb.jpg')}
          />
        </View>
      </View>
      <View style={styles.welcomeTitle}>
        <TitleTextComponent
          textStyle={styles.textTitleEA}
          textTitle={'Welcome to NEDC-Alert'}
        />
        <TitleTextComponent
          textStyle={styles.textSubTitle}
          textTitle={
            'your direct link to North-East\n Development Commission...'
          }
        />
        <View style={styles.headerButtons}>
          <ButtonComponent
            title="QUICK ALERT"
            onPress={() => sendTipsAlert()}
          />
          <ButtonComponent
            title="SEND TIPS"
            buttStyle={{backgroundColor: '#F4A261'}}
            onPress={sendTipsAlert}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    marginLeft: hp(10),
    marginTop: hp(20),
    flexDirection: 'row',
    width: wp(322),
  },
  logoNEDC: {
    flexDirection: 'row',
  },
  imageR: {
    borderRadius: 20,
  },
  imageP: {
    marginHorizontal: 5,
    borderRadius: 15,
  },
  nedcA: {
    marginTop: hp(5),
    marginLeft: hp(6),
    fontFamily: 'Lato-Black',
    fontSize: 16,
    color: '#0D703A',
    // letterSpacing: 2,
  },
  wrapProfile: {
    marginLeft: hp(110),
    marginTop: hp(10),
    flexDirection: 'row',
  },
  featherIcon: {
    // flexDirection:'row',
    marginHorizontal: 5,
  },
  welcomeTitle: {
    width: '100%',
    marginTop: 50,
    marginLeft: 10,
  },
  textTitleEA: {
    marginVertical: 10,
    fontSize: 18,
    color: 'white',
    fontFamily: 'Lato-Black',
  },
  textSubTitle: {
    fontSize: 14,
    color: 'white',
  },
  headerButtons: {
    flexDirection: 'row',
  },
  sendTips: {
    backgroundColor: 'red',
  },
});
export default HeaderComponent;

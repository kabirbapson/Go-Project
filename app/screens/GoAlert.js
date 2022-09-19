import React from 'react';
import {View, Image, StyleSheet, Text, FlatList} from 'react-native';
import {COLORS} from '../../assets/colors';
import {hp, wp} from '../utils/dpTopx';
import CardComponent from '../components/CardComponent';
import HeaderComponent from '../components/HeaderComponent';
import {HeaderTitle} from '../components/HeaderTitle';
import ButtonComponent from '../components/ButtonComponent';

const DATA = [
  {
    id: 1,
    iconName: 'mail',
    title: 'Emergency',
    subtitle: 'List of emergency phone numbers',
    bgColor: COLORS.mediumCyan,
  },
  {
    id: 2,
    iconName: 'eye',
    title: 'Info & Tips',
    subtitle: 'Know something? Say something',
    bgColor: COLORS.sandyBrown,
  },
  {
    id: 3,
    iconName: 'alert-circle',
    title: 'Happening Now',
    subtitle: "What's happening in your area?",
    bgColor: COLORS.lightOrange,
  },
  {
    id: 4,
    iconName: 'message-circle',
    title: 'Education',
    subtitle: 'How can we help in the education sector?',
    bgColor: COLORS.lightYellow,
  },
];

const Item = ({item}) => (
  <CardComponent
    cardItem={item}
    iconName={item.iconName}
    cardStyle={{
      marginRight: 10,
      marginBottom: 10,
      backgroundColor: item.bgColor,
    }}
  />
);

function GoAlert({navigation}) {
  const sendTipsAlert = () => {
    alert('Send tips');
  };
  const renderItem = ({item}) => <Item item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderComponent
          title={'GOMBE\nALERT'}
          featherIconColor="#FDC904"
          titleColor={styles.titleColor}
          onProfilePress={() => navigation.navigate('Profile')}
        />

        <View style={styles.headerTexts}>
          <HeaderTitle
            textStyle={styles.headTitle}
            textTitle={'Gombe, Report Your Area!'}
          />
          <View>
            <HeaderTitle
              textStyle={styles.headSubTitle}
              textTitle={
                'This is Gombe state alert,\nyour direct link to Gombe State Government'
              }
            />
          </View>
        </View>
        <View>
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

      <View style={{paddingHorizontal: 25}}>
        <HeaderTitle
          textStyle={styles.textEmergencyAssistance}
          textTitle={'Emergency Assistance'}
        />

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#e5e5e5',
  },
  header: {
    backgroundColor: '#216131',
    paddingHorizontal: 25,
    paddingTop: 20,
    paddingBottom: 50,
  },
  textEmergencyAssistance: {
    paddingVertical: 10,
  },
  headerTexts: {
    margin: hp(10),
  },
  headTitle: {
    color: COLORS.white,
    marginVertical: hp(10),
    fontSize: 18,
    // fontFamily: 'Lato-Bold',
  },
  headSubTitle: {
    color: COLORS.white,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    letterSpacing: 1,
    marginTop: 2,
  },
  headerButtons: {
    flexDirection: 'row',
    marginHorizontal: hp(20),
  },
  titleColor: {
    color: '#FDC904',
  },
  sendTips: {
    backgroundColor: 'red',
  },
});
export default GoAlert;

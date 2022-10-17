/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {Text, Box, Pressable} from 'native-base';
import {COLORS} from '../../../assets/colors';
import {hp, wp} from '../../utils/dpTopx';
import CardComponent from '../../components/CardComponent';
import HeaderComponent from '../../components/HeaderComponent';
import {HeaderTitle} from '../../components/HeaderTitle';
import ButtonComponent from '../../components/ButtonComponent';

const DATA = [
  {
    id: 1,
    iconName: 'ambulance',
    title: 'Emergency',
    subtitle: 'List of emergency phone numbers',
    bgColor: COLORS.mediumCyan,
  },
  {
    id: 2,
    iconName: 'eye',
    title: 'Info & Tips',
    subtitle: 'Find location on map, or locate yourself',
    bgColor: COLORS.sandyBrown,
  },
  {
    id: 3,
    iconName: 'exclamation-thick',
    title: 'Happening Now',
    subtitle: "What's happening in your area?",
    bgColor: COLORS.lightOrange,
  },
  {
    id: 4,
    iconName: 'message-bookmark-outline',
    title: 'Education',
    subtitle: 'How can we help in the education sector?',
    bgColor: COLORS.lightYellow,
  },
];

const Item = ({item, onPress}) => (
  <Pressable onPress={() => onPress(item.id)}>
    <CardComponent
      cardItem={item}
      iconName={item.iconName}
      cardStyle={{
        marginRight: 10,
        marginBottom: 10,
        backgroundColor: item.bgColor,
      }}
    />
  </Pressable>
);

export default function Alert({navigation}) {
  const renderItem = ({item, onPress}) => (
    <Item item={item} onPress={handleOptionPress} />
  );
  const handleQuickAlert = () => navigateTo('Quick Alert');
  const handleSendTips = () => navigateTo('Send Tips');
  const navigateTo = destination => navigation.navigate(destination);

  const handleOptionPress = action => {
    switch (action) {
      case 1:
        navigateTo('Emergency');
        break;
      case 2:
        navigateTo('Send Tips');
        break;
      case 3:
        navigateTo('Status');
        break;
      case 4:
        navigateTo('Education');
        break;
      default:
        console.log(action);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <View style={styles.container}> */}
      <View style={styles.header}>
        <HeaderComponent
          title={'GOMBE\nALERT'}
          featherIconColor="#FDC904"
          titleColor={styles.titleColor}
          onProfilePress={() => navigation.navigate('Profile')}
          onMessagePress={() => navigation.navigate('Messages')}
          onNotificationPress={() => navigation.navigate('Notifications')}
        />

        <View style={styles.headerTexts}>
          <Text
            mt={'5'}
            color={'white'}
            fontSize={'xl'}
            fontFamily={'Lato-Bold'}>
            Gombe, report your area!
          </Text>
          <Text
            mt={'2'}
            color={'white'}
            fontSize={'md'}
            fontFamily={'Lato-Regular'}>
            This is Gombe state alert, your direct link to Gombe State
            Government
          </Text>
        </View>
        <View>
          <View style={styles.headerButtons}>
            <ButtonComponent title="Quick Alert" onPress={handleQuickAlert} />
            <ButtonComponent
              title="Send Tips"
              buttStyle={{backgroundColor: '#F4A261'}}
              onPress={handleSendTips}
            />
          </View>
        </View>
      </View>

      <View style={{paddingHorizontal: 25}}>
        <Text my={'2'} fontFamily={'Lato-Bold'} fontSize={'2xl'}>
          Emergency Assistance
        </Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontFamily: 'Lato-Bold',
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

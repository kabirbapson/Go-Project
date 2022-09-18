import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {COLORS} from '../../../assets/colors';
import {hp, wp} from '../../utils/dpTopx';
import CardComponent from '../../components/CardComponent';
import HeaderComponent from '../../components/HeaderComponent';
import {HeaderTitle} from '../../components/HeaderTitle';

export default function Info({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1,}}>

    <View style={styles.container}>
      <HeaderComponent
        title={'GOMBE\nNEWS'}
        titleColor={styles.titleColor}
        featherIconColor="#216131"
        onProfilePress={() => navigation.navigate('Profile')}
        />
    </View>
        </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 25,
    paddingTop: 20,
  },
});

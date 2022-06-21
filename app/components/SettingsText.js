import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../../assets/colors';
import {hp, wp} from '../utils/dpTopx';

function SettingsText({text, iconName, line = true}) {
  return (
    <View>
      <View style={styles.profileSettings}>
        <Feather name={iconName} size={24} color="#000000" />
        <Text style={styles.profileText}>{text}</Text>
      </View>
      {line && <View style={styles.underLine} />}
    </View>
  );
}

export default SettingsText;
const styles = StyleSheet.create({
  profileSettings: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  profileText: {
    fontSize: 20,
    color: '#000000',
    marginHorizontal: 10,
  },
  underLine: {
    width: '100%',
    height: 2,
    backgroundColor: '#D9D9D9',
  },
});

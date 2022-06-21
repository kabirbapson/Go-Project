import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {hp, wp} from '../utils/dpTopx';

import Feather from 'react-native-vector-icons/Feather';
export default function SettingsSubTexts({onPress, catText, iconName, color}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.ViewProfileText}>
        <Text style={styles.subProfileText}>{catText}</Text>
        <Feather
          name={iconName}
          size={30}
          color={iconName === 'toggle-right' ? 'red' : '#000000'}
        />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  ViewProfileText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginVertical: 10,
  },
  subProfileText: {
    fontSize: 16,
    color: '#000000',
    marginVertical: 5,
  },
});

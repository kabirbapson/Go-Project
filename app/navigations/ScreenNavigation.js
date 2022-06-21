import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import Home from '../screens/Home';
import Location from '../screens/Location';
import Profile from '../screens/Profile';
import NavBottomBar from './NavBottomBar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

export default function ScreenNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeBottomBar"
        component={NavBottomBar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({});

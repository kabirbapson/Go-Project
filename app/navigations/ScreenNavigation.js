import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screens
import Home from '../screens/Home';
import Location from '../screens/Location';
import Notifications from '../screens/Notifications';
import Emergency from '../screens/Emergency';


import QAlert from '../screens/QAlert';
import SendTips from '../screens/SendTips';
import Messages from '../screens/Messages';

import Profile from '../screens/Profile';
import NavBottomBar from './NavBottomBar';
import NewsPost from '../screens/NewsPost';

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
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Quick Alert"
        component={QAlert}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Send Tips"
        component={SendTips}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Emergency"
        component={Emergency}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Location"
        component={Location}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NewsPost"
        component={NewsPost}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

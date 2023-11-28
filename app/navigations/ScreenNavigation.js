import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import Location from '../screens/Location';
import Notifications from '../screens/Notifications';
import Status from '../screens/Status';

import Call from '../screens/Call';
import QAlert from '../screens/QAlert';
import SendTips from '../screens/SendTips';
import Messages from '../screens/Messages';

import Profile from '../screens/Profile';
import NavBottomBar from './NavBottomBar';
import NewsPost from '../screens/NewsPost';

import ReadPost from '../screens/Info/ReadPost';
import Splash from '../screens/Splash';
import Police from '../screens/Police';
import Hospital from '../screens/Hospital';

const Stack = createNativeStackNavigator();

export default function ScreenNavigation() {
  return (
    <Stack.Navigator initialRouteName="Splash">
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
        name="Police"
        component={Police}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Hospital"
        component={Hospital}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Status"
        component={Status}
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
      <Stack.Screen
        name="ReadPost"
        component={ReadPost}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Call"
        component={Call}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

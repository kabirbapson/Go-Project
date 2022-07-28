import React from 'react';
import {View, StatusBar, StyleSheet, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

// screens
// import Home from '../screens/Home';
import Info from '../screens/Info';
import News from '../screens/News';
import Alert from '../screens/Alert';
// import Location from '../screens/Location';
// import Profile from '../screens/Profile';
import {wp, hp} from '../utils/dpTopx';
import {COLORS} from '../../assets/colors';

const Tab = createBottomTabNavigator();

export default function NavBottomBar() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'News') {
            iconName = focused ? 'newspaper' : 'newspaper';
            // size = focused ? size + 5 : size + 3;
            color = focused ? '#2A9D8F' : 'white';
          } else if (route.name === 'Information') {
            iconName = focused ? 'street-view' : 'street-view';
            // size = focused ? size + 5 : size + 3;
            color = focused ? '#2A9D8F' : 'white';
          } else if (route.name === 'Alert') {
            iconName = focused
              ? 'exclamation-triangle'
              : 'exclamation-triangle';
            // size = focused ? size + 5 : size + 3;
            color = focused ? '#2A9D8F' : 'white';
          }
          return (
            <View style={{alignItems: 'center'}}>
              <FontAwesome name={iconName} size={size} color={color} />
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Lato-Regular',
                  fontSize: 10,
                }}>
                {route.name}
              </Text>
            </View>
          );
        },
        tabBarActiveTintColor: 'skyblue',
        tabBarInactiveTintColor: 'black',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.darkCyan,
          height: hp(60),
          margin: hp(10),
          borderRadius: 15,
          width: wp(322),
          justifyContent: 'center',
          alignSelf: 'center',
        },
      })}>
      <Tab.Screen name="News" component={News} options={{headerShown: false}} />
      <Tab.Screen
        name="Information"
        component={Info}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Alert"
        component={Alert}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

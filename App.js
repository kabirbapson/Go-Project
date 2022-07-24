import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ScreenNavigation from './app/navigations/ScreenNavigation';

import {NativeBaseProvider} from 'native-base';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <ScreenNavigation />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

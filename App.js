import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ScreenNavigation from './app/navigations/ScreenNavigation';

import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {store} from './app/stores';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Provider store={store}>
          <ScreenNavigation />
        </Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ScreenNavigation from './app/navigations/ScreenNavigation';

import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {store} from './app/stores';
import CodePush from 'react-native-code-push';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Provider store={store}>
          <ScreenNavigation />
        </Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
};
export default CodePush(codePushOptions)(App);

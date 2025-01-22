import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import Routes from './src/routes';
import store from './src/store';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}

export default App;

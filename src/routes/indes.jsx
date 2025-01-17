import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '../screens/auth/Onboarding';
import Signin from '../screens/auth/Signin';
import Signup from '../screens/auth/Signup';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

const Routes = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={Onboarding} name="Onboarding" />
        <Stack.Screen component={Signin} name="Signin" />
        <Stack.Screen component={Signup} name="Signup" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

import React, {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Onboarding from '../screens/auth/Onboarding';
import Signin from '../screens/auth/Signin';
import Signup from '../screens/auth/Signup';

const Stack = createStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Onboarding} name="Onboarding" />
      <Stack.Screen component={Signin} name="Signin" />
      <Stack.Screen component={Signup} name="Signup" />
    </Stack.Navigator>
  );
};

export default memo(StackRoutes);

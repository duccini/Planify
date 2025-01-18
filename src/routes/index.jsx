import React, {memo, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import 'react-native-gesture-handler';

import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '../screens/auth/Onboarding';
import Signin from '../screens/auth/Signin';
import Signup from '../screens/auth/Signup';
import {Text} from 'react-native';

const Stack = createStackNavigator();

const Routes = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  console.log('user: ', user);

  // Handle user state changes
  function handleAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(handleAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Here we can show a Loading screen
  if (initializing) {
    return null;
  }

  if (user) {
    const logout = () => {
      auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    };
    return (
      <>
        <Text style={{margin: 40}}>Welcome</Text>
        <Text onPress={logout} style={{marginHorizontal: 40}}>
          Logout
        </Text>
      </>
    );
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Onboarding} name="Onboarding" />
      <Stack.Screen component={Signin} name="Signin" />
      <Stack.Screen component={Signup} name="Signup" />
    </Stack.Navigator>
  );
};

export default memo(Routes);

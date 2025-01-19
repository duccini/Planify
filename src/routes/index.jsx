/* eslint-disable react-hooks/exhaustive-deps */

import React, {memo, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import 'react-native-gesture-handler';

import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

const Routes = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function handleAuthStateChanged(userData) {
    setUser(userData);
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

  // Private Routes
  if (user) {
    return <PrivateRoutes />;
  }

  // Public Routes
  return <PublicRoutes />;
};

export default memo(Routes);

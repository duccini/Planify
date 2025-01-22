/* eslint-disable react-hooks/exhaustive-deps */

import 'react-native-gesture-handler';
import React, {memo, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';

import {setUser} from '../store/user';

import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

const Routes = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);

  // Redux State - Set user with Dispatch
  const user = useSelector(state => state.user.data);
  const dispatch = useDispatch();

  // When we call dispatch with a function inside it will redirect the call
  // to redux. If we call directly `setUser()` it will not work, we need wrap
  // inside `dispatch`

  // Handle user state changes
  function handleAuthStateChanged(userData) {
    dispatch(setUser(userData));
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

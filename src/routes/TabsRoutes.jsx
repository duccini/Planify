import React, {memo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Image} from 'react-native';

import Home from '../screens/app/Home';
import Tasks from '../screens/app/Tasks';
import styles from './styles';

const Tab = createBottomTabNavigator();

/*
 *  tabBarShowLabel removes the label under the icons
 */

const bottomTabsOptions = {
  tabBarShowLabel: false,
  headerShown: false,
};

const homeOptions = {
  tabBarIcon: ({focused}) => (
    <Image
      style={styles.icon}
      source={
        focused
          ? require('@assets/home_active.png')
          : require('@assets/home_inactive.png')
      }
    />
  ),
};

const tasksOptions = {
  tabBarIcon: ({focused}) => (
    <Image
      style={styles.icon}
      source={
        focused
          ? require('@assets/calendar_active.png')
          : require('@assets/calendar_inactive.png')
      }
    />
  ),
};

const TabsRoutes = () => {
  return (
    <Tab.Navigator screenOptions={bottomTabsOptions}>
      <Tab.Screen name="Home" component={Home} options={homeOptions} />
      <Tab.Screen name="Tasks" component={Tasks} options={tasksOptions} />
    </Tab.Navigator>
  );
};

export default memo(TabsRoutes);

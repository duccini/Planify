import React, {memo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/app/Home';
import Tasks from '../screens/app/Tasks';

const Tab = createBottomTabNavigator();

const TabsRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Tasks" component={Tasks} />
    </Tab.Navigator>
  );
};

export default memo(TabsRoutes);

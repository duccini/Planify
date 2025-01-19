import React, {memo} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import TabsRoutes from './TabsRoutes';
import AddTask from '../screens/app/AddTask';

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="TabsRoutes" component={TabsRoutes} />
      <Drawer.Screen name="AddTask" component={AddTask} />
    </Drawer.Navigator>
  );
};

export default memo(DrawerRoutes);

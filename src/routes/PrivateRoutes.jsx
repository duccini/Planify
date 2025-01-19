import React, {memo} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import TabsRoutes from './TabsRoutes';
import AddTask from '../screens/app/AddTask';
import DrawerContent from '@components/DrawerContent';

const Drawer = createDrawerNavigator();

const drawerContent = props => <DrawerContent {...props} />;

const PrivateRoutes = () => {
  return (
    <Drawer.Navigator drawerContent={drawerContent}>
      <Drawer.Screen name="Tabs" component={TabsRoutes} />
      <Drawer.Screen name="AddTask" component={AddTask} />
    </Drawer.Navigator>
  );
};

export default memo(PrivateRoutes);

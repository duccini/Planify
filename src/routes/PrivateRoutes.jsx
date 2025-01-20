import React, {memo} from 'react';
import {Dimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import TabsRoutes from './TabsRoutes';
import AddTask from '../screens/app/AddTask';
import DrawerContent from '@components/DrawerContent';

const Drawer = createDrawerNavigator();

const drawerContent = props => <DrawerContent {...props} />;

const drawerOptions = {
  headerShown: false,
  // drawerPosition: 'right',
  drawerStyle: {
    width: Dimensions.get('window').width * 0.75,
  },
};

const PrivateRoutes = () => {
  return (
    <Drawer.Navigator
      screenOptions={drawerOptions}
      drawerContent={drawerContent}>
      <Drawer.Screen name="Tabs" component={TabsRoutes} />
      <Drawer.Screen name="AddTask" component={AddTask} />
    </Drawer.Navigator>
  );
};

export default memo(PrivateRoutes);

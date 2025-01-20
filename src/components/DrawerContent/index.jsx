import React, {memo} from 'react';
import auth from '@react-native-firebase/auth';

import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Linking, Text} from 'react-native';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {
  PRIVACY_POLICY_LINK,
  TERMS_CONDITIONS_LINK,
} from '../../constants/links';

const DrawerContent = props => {
  const logout = () => {
    auth().signOut().then();
  };

  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props}>
      <Text style={styles.link} onPress={() => navigation.navigate('Home')}>
        Home
      </Text>
      <Text style={styles.link} onPress={() => navigation.navigate('Tasks')}>
        Tasks
      </Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL(PRIVACY_POLICY_LINK)}>
        Privacy Policy
      </Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL(TERMS_CONDITIONS_LINK)}>
        Terms and Conditions
      </Text>
      <Text style={styles.link} onPress={logout}>
        Log out
      </Text>
    </DrawerContentScrollView>
  );
};

export default memo(DrawerContent);

import React, {memo} from 'react';

import {View} from 'react-native';
import styles from './styles';
import Button from '@components/Button';

const Signup = () => {
  return (
    <View style={styles.container}>
      <Button type="blue">Sign up</Button>
    </View>
  );
};

export default memo(Signup);

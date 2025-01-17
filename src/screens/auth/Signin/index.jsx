import React, {memo} from 'react';

import {View} from 'react-native';
import styles from './styles';
import Button from '@components/Button';

const Signin = () => {
  return (
    <View style={styles.container}>
      <Button type="blue">Sign in</Button>
    </View>
  );
};

export default memo(Signin);

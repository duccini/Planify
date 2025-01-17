import React, {memo} from 'react';
import {SafeAreaView, Text} from 'react-native';

import styles from './styles';
import Button from '@components/Button';
import Title from '@components/Title';
import Input from '../../../components/Input';

const Signin = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Title text="Welcome back!" />

      <Input placeholder="Email" />
      <Input placeholder="Password" />

      <Button>Log in</Button>

      <Text style={styles.footerText}>
        Not Registered? <Text style={styles.footerLink}>Sign up!</Text>
      </Text>
    </SafeAreaView>
  );
};

export default memo(Signin);

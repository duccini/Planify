import React, {memo} from 'react';
import {SafeAreaView, Text} from 'react-native';

import styles from './styles';
import Button from '@components/Button';
import Title from '@components/Title';
import Input from '../../../components/Input';

const Signin = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Title text="Welcome back!" />

      <Input placeholder="Email" keyboardType="email-address" />
      <Input placeholder="Password" secureTextEntry />

      <Button>Log in</Button>

      <Text style={styles.footerText}>
        Not Registered?{' '}
        <Text
          onPress={() => navigation.navigate('Signup')}
          style={styles.footerLink}>
          Sign up!
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default memo(Signin);

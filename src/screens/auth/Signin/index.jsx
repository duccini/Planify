import React, {memo, useState} from 'react';
import {Alert, SafeAreaView, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

import styles from './styles';
import Button from '@components/Button';
import Title from '@components/Title';
import Input from '../../../components/Input';

const Signin = ({navigation}) => {
  const [values, setValues] = useState({});

  const handleOnChange = (value, key) => {
    setValues(values => {
      return {
        ...values,
        [key]: value,
      };
    });
  };

  const onSubmit = () => {
    if (!values.email || !values.password) {
      Alert.alert('Please enter your email and password');
    }

    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          Alert.alert('Please enter a valid email');
        }

        if (error.code === 'auth/invalid-credential') {
          Alert.alert('Invalid email and password credentials!');
        }

        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title text="Welcome back!" />

      <Input
        onChangeText={val => handleOnChange(val, 'email')}
        placeholder="Email"
        keyboardType="email-address"
      />
      <Input
        onChangeText={val => handleOnChange(val, 'password')}
        placeholder="Password"
        secureTextEntry
      />

      <Button onPress={onSubmit}>Log in</Button>

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

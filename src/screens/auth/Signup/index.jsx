import React, {memo, useState} from 'react';
import {
  Alert,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import styles from './styles';
import Button from '@components/Button';
import Title from '@components/Title';
import Input from '@components/Input';
import Checkbox from '../../../components/Checkbox';
import {
  PRIVACY_POLICY_LINK,
  TERMS_CONDITIONS_LINK,
} from '../../../constants/links';

const Signup = ({navigation}) => {
  const [agreed, setAgreed] = useState(false);
  const [values, setValues] = useState({});

  const handleOnPress = () => {
    setAgreed(value => !value);
  };

  // Redirecting to external URL: Linking from RN
  const onLinkPress = url => {
    Linking.openURL(url);
  };

  // Update Values from Inputs
  const handleOnChange = (value, key) => {
    setValues(values => {
      return {
        ...values,
        [key]: value,
      };
    });
  };

  const onSubmit = () => {
    if (!values.first_name || !values.last_name) {
      Alert.alert('Please enter first name and last name!');
      return;
    }

    if (!agreed) {
      Alert.alert('You should agree with the terms!');
      return;
    }

    if (values.password !== values.confirm_password) {
      Alert.alert('Passwords do not match!');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        // we already have auth so we don't need `firebase.ahtu()`
        auth().currentUser.updateProfile({
          displayName: `${values.first_name} ${values.last_name}`,
        });

        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showVerticalScrollIndicator={false}>
        <Title text="Join the hub!" />

        <View style={styles.section}>
          <Input
            onChangeText={val => handleOnChange(val, 'first_name')}
            placeholder="First Name"
          />
        </View>

        <View style={styles.section}>
          <Input
            onChangeText={val => handleOnChange(val, 'last_name')}
            placeholder="Last Name"
          />
        </View>

        <View style={styles.section}>
          <Input
            onChangeText={val => handleOnChange(val, 'email')}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.section}>
          <Input
            onChangeText={val => handleOnChange(val, 'password')}
            placeholder="Password"
            secureTextEntry
          />
        </View>

        <View style={styles.section}>
          <Input
            onChangeText={val => handleOnChange(val, 'confirm_password')}
            placeholder="Confirm Password"
            secureTextEntry
          />
        </View>

        <View style={styles.alerts}>
          <Checkbox checked={agreed} handleCheckbox={handleOnPress} />

          <Text style={styles.agreedText}>
            I agree to{' '}
            <Text
              onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}
              style={styles.links}>
              Terms and Conditions
            </Text>{' '}
            and{' '}
            <Text
              onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}
              style={styles.links}>
              Privacy Policy
            </Text>
          </Text>
        </View>

        <Button onPress={onSubmit} type="blue">
          Create account
        </Button>

        <Text style={styles.footerText}>
          Already registred?{' '}
          <Text
            onPress={() => navigation.navigate('Signin')}
            style={styles.footerLink}>
            Sign in!
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(Signup);

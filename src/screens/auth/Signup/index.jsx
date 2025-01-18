import React, {memo, useState} from 'react';

import {Linking, SafeAreaView, Text, View} from 'react-native';
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

  const handleOnPress = () => {
    setAgreed(value => !value);
  };

  // Redirecting to external URL: Linking from RN
  const onLinkPress = url => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title text="Join the hub!" />

      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Email" keyboardType="email-address" />
      <Input placeholder="Password" secureTextEntry />
      <Input placeholder="Confirm Password" secureTextEntry />

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

      <Button type="blue">Create account</Button>

      <Text style={styles.footerText}>
        Already registred?{' '}
        <Text
          onPress={() => navigation.navigate('Signin')}
          style={styles.footerLink}>
          Sign in!
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default memo(Signup);

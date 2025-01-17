import React, {memo} from 'react';

import {Image, Text, View} from 'react-native';
import styles from './styles';
import Button from '../../../components/Button';

const Onboarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Image
          style={styles.image}
          source={require('@assets/onboarding.jpg')}
        />

        <View style={styles.footer} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Best task management app</Text>
        <Text style={styles.subtitle}>
          Get organized by sorting out all your tasks and boost your
          productivity.
        </Text>

        <Button onPress={() => navigation.navigate('Signin')}>Log in</Button>
        <Button onPress={() => navigation.navigate('Signup')} type="blue">
          Get startted
        </Button>
      </View>
    </View>
  );
};

export default memo(Onboarding);

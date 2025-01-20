import React, {memo} from 'react';

import {SafeAreaView, Text} from 'react-native';
import Header from '@components/Header';
import PlusIcon from '@components/PlusIcon';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
import Title from '@components/Title';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />

      <ScrollView>
        <Title type="thin" text="Daily Tasks" />
      </ScrollView>

      <PlusIcon />
    </SafeAreaView>
  );
};

export default memo(Home);

import React, {memo} from 'react';

import {SafeAreaView, ScrollView, Text} from 'react-native';
import Header from '@components/Header';
import styles from './styles';
import PlusIcon from '@components/PlusIcon';
import Title from '@components/Title';

const Tasks = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tasks" />

      <ScrollView>
        <Title type="thin" text="To Do Tasks" />
      </ScrollView>

      <PlusIcon />
    </SafeAreaView>
  );
};

export default memo(Tasks);

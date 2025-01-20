import React, {memo} from 'react';

import {SafeAreaView, ScrollView, Text} from 'react-native';
import Header from '@components/Header';
import styles from './styles';
import PlusIcon from '@components/PlusIcon';

const Tasks = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tasks" />

      <ScrollView>
        <Text>Tasks</Text>
      </ScrollView>

      <PlusIcon />
    </SafeAreaView>
  );
};

export default memo(Tasks);

import React, {memo} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

import Header from '@components/Header';
import PlusIcon from '@components/PlusIcon';
import Title from '@components/Title';

import styles from './styles';

const Home = () => {
  const user = useSelector(state => state.user.data);

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

import React, {memo, useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

import firestore from '@react-native-firebase/firestore';

import Header from '@components/Header';
import PlusIcon from '@components/PlusIcon';
import Title from '@components/Title';

import styles from './styles';

const Home = () => {
  const user = useSelector(state => state.user.data);

  useEffect(() => {
    firestore()
      .collection('Tasks')
      .where('userId', '==', user.uid)
      .get()
      .then(querySnapshot => {
        console.log('Total tasks: ', querySnapshot.size);

        querySnapshot.forEach(documentSnapshot => {
          console.log(
            'User ID: ',
            documentSnapshot.id,
            documentSnapshot.data(),
          );
        });
      });
  }, [user]);

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

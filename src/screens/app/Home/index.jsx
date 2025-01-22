import React, {memo, useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import firestore from '@react-native-firebase/firestore';

import Header from '@components/Header';
import PlusIcon from '@components/PlusIcon';
import Title from '@components/Title';

import styles from './styles';
import setTasks from '@store/tasks';

const Home = () => {
  const user = useSelector(state => state.user.data);
  const dispatch = useDispatch();

  useEffect(() => {
    firestore()
      .collection('Tasks')
      .where('userId', '==', user.uid)
      .get()
      .then(querySnapshot => {
        console.log('Total tasks: ', querySnapshot.size);
        const tasksLists = [];

        querySnapshot.forEach(documentSnapshot => {
          tasksLists.push(documentSnapshot.data());
          // console.log(
          //   'User ID: ',
          //   documentSnapshot.id,
          //   documentSnapshot.data(),
          // );
        });

        dispatch(setTasks(tasksLists));
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

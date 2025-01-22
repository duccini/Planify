import React, {memo, useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import firestore from '@react-native-firebase/firestore';

import {setTasks} from '@store/tasks';

import Header from '@components/Header';
import PlusIcon from '@components/PlusIcon';
import Title from '@components/Title';

import styles from './styles';

const Home = () => {
  const user = useSelector(state => state.user.data);
  const tasks = useSelector(state => state.tasks.data);
  const dispatch = useDispatch();

  useEffect(() => {
    firestore()
      .collection('Tasks')
      .where('userId', '==', user.uid)
      .get()
      .then(querySnapshot => {
        const tasksLists = [];

        querySnapshot.forEach(documentSnapshot => {
          tasksLists.push({
            uid: documentSnapshot.id,
            ...(documentSnapshot.data() || {}),
          });
        });

        dispatch(setTasks(tasksLists));
      });
  }, [user, dispatch]);

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

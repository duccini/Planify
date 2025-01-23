import React, {memo, useEffect} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import firestore from '@react-native-firebase/firestore';

import {setTasks} from '@store/tasks';

import Header from '@components/Header';
import PlusIcon from '@components/PlusIcon';
import Title from '@components/Title';
import StatusCard from '@components/StatusCard';

import styles from './styles';

const Home = () => {
  const user = useSelector(state => state.user.data);
  const tasks = useSelector(state => state.tasks.data);
  const toUpdate = useSelector(state => state.tasks.toUpdate);

  const dispatch = useDispatch();

  console.log('tasks: ', tasks);
  console.log('toUpdate: ', toUpdate);

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
  }, [user, dispatch, toUpdate]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />

      <ScrollView>
        <Title type="thin" text="Daily Tasks" />

        <View style={styles.statusCardList}>
          <StatusCard label="High Priority" count={3} />
          <StatusCard type="error" label="Due Deadline" count={3} />
          <StatusCard label="Quick Win" count={3} />
        </View>
      </ScrollView>

      <PlusIcon />
    </SafeAreaView>
  );
};

export default memo(Home);

import React, {memo, useEffect, useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import firestore from '@react-native-firebase/firestore';

import {setTasks} from '@store/tasks';

import Header from '@components/Header';
import PlusIcon from '@components/PlusIcon';
import Title from '@components/Title';
import StatusCard from '@components/StatusCard';

import styles from './styles';
import moment from 'moment';

const Home = ({navigation}) => {
  const [counts, setCounts] = useState({});

  const user = useSelector(state => state.user.data);
  const tasks = useSelector(state => state.tasks.data);
  const toUpdate = useSelector(state => state.tasks.toUpdate);

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
  }, [user, dispatch, toUpdate]);

  useEffect(() => {
    if (tasks?.length) {
      const highPriority = tasks.filter(
        task => task.category === 'urgent' || task.category === 'important',
      );

      const today = moment(new Date()).format('YYYY-MM-DD');

      // moments works with timestamp in miliseconds not seconds

      const dueDeadline = tasks.filter(task => {
        const deadline = task.deadline.seconds * 1000;
        const deadlineFormatted = moment(deadline).format('YYYY-MM-DD');
        return moment(deadlineFormatted).isBefore(today);
      });

      const quickWin = tasks.filter(task => task.category === 'quick_task');

      setCounts({
        highPriority: highPriority.length,
        dueDeadline: dueDeadline.length,
        quickWin: quickWin.length,
      });
    }
  }, [tasks]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />

      <ScrollView>
        <Title type="thin" text="Daily Tasks" />

        <View style={styles.statusCardList}>
          <StatusCard label="High Priority" count={counts.highPriority} />
          <StatusCard
            type="error"
            label="Due Deadline"
            count={counts.dueDeadline}
          />
          <StatusCard label="Quick Win" count={counts.quickWin} />
        </View>

        <Pressable
          style={styles.box}
          onPress={() => navigation.navigate('Tasks')}>
          <Text style={styles.boxTitle}>Check all tasks</Text>
          <Text style={styles.boxSubTitle}>
            See all tasks and filter them by categories that you have selected
            when creating them
          </Text>
        </Pressable>
      </ScrollView>

      <PlusIcon />
    </SafeAreaView>
  );
};

export default memo(Home);

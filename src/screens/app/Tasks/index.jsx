import React, {memo, useState, useEffect} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import firestore from '@react-native-firebase/firestore';

import {setToUpdate} from '@store/tasks';

import Header from '@components/Header';
import PlusIcon from '@components/PlusIcon';
import Title from '@components/Title';
import Checkbox from '@components/Checkbox';
import Categories from '@components/Categories';
import categories from '@constants/categories';

import styles from './styles';

const Tasks = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredTasks, setFilteredTasks] = useState([]);
  const tasks = useSelector(state => state.tasks.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCategory && selectedCategory !== 'all') {
      const filtered = tasks.filter(
        task => task?.category === selectedCategory,
      );
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(tasks);
    }
  }, [selectedCategory, tasks]);

  const onTaskUpdate = item => {
    firestore()
      .collection('Tasks')
      .doc(item?.uid)
      .update({
        checked: !item.checked,
      })
      .then(() => {
        dispatch(setToUpdate());
      });
  };

  const renderTask = ({item}) => {
    return (
      <View style={styles.task}>
        <Checkbox
          handleCheckbox={() => onTaskUpdate(item)}
          checked={item.checked}
        />
        <Text style={[styles.taskText, item.checked ? styles.taskDone : {}]}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tasks" />

      <FlatList
        // style={styles.tasksList}
        ListHeaderComponent={
          <View style={{marginBottom: 24}}>
            <Title type="thin" text="To Do Tasks" />

            <Categories
              categories={[{label: 'All', value: 'all'}, ...categories]}
              selectedCategory={selectedCategory}
              onCategoryPress={setSelectedCategory}
            />
          </View>
        }
        data={filteredTasks}
        keyExtractor={item => String(item.uid)}
        renderItem={renderTask}
      />

      <PlusIcon />
    </SafeAreaView>
  );
};

export default memo(Tasks);

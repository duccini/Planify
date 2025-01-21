import React, {memo, useState} from 'react';
import {Pressable, SafeAreaView, Image, Text, View, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';

import Title from '@components/Title';
import Input from '@components/Input';
import Categories from '@components/Categories';
import DateInput from '@components/DateInput';
import Button from '@components/Button';

import styles from './styles';

import categories from '../../../constants/categories';

const AddTasks = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const onSubmit = () => {
    const today = moment(new Date()).format('YYYY-MM-DD');
    const deadlineFormatted = moment(deadline).format('YYYY-MM-DD');

    // console.log('deadlineFOrmatted: ', deadlineFormatted);
    // console.log('today: ', today);

    if (!title) {
      Alert.alert('Please enter the task tile.');
      return;
    }

    // moment precisa ser formatado 'YYYY-MM-DD' para aplicar isBefore()
    if (moment(deadlineFormatted).isBefore(today)) {
      Alert.alert('Please enter a valid date.');
      return;
    }

    // console.log(title, deadline, category);
    // return;

    firestore()
      .collection('Tasks')
      .doc('ABC') // user id
      .set({
        title,
        deadline,
        category,
      })
      .then(() => {
        console.log('Task added!');
      });
  };

  return (
    <SafeAreaView>
      <Pressable
        hitSlop={8}
        style={styles.addTaskHeader}
        onPress={handleGoBack}>
        <Image style={styles.icon} source={require('@assets/leftArrow.png')} />
      </Pressable>

      <Title type="thin" text="Add New Task" />

      <View style={styles.section}>
        <Text style={styles.label}>Describe the task</Text>
        <Input
          value={title}
          onChangeText={setTitle}
          outline
          placeholder="Type here ..."
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Type</Text>
        <Categories
          categories={categories}
          selectedCategory={category}
          onCategoryPress={setCategory}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Deadline</Text>
        <DateInput value={deadline} onChange={setDeadline} />
      </View>

      <View style={styles.button}>
        <Button style={styles.button} type="blue" onPress={onSubmit}>
          Add Task
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default memo(AddTasks);

import React, {memo, useState} from 'react';
import {useSelector} from 'react-redux';
import {
  Pressable,
  SafeAreaView,
  Image,
  Text,
  View,
  Alert,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';

import Title from '@components/Title';
import Input from '@components/Input';
import Categories from '@components/Categories';
import DateInput from '@components/DateInput';
import Button from '@components/Button';

import styles from './styles';

import categories from '@constants/categories';

const AddTasks = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  const user = useSelector(state => state.user.data);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const onSubmit = () => {
    const today = moment(new Date()).format('YYYY-MM-DD');
    const deadlineFormatted = moment(deadline).format('YYYY-MM-DD');

    if (!title) {
      Alert.alert('Please enter the task tile.');
      return;
    }

    // moment precisa ser formatado 'YYYY-MM-DD' para aplicar isBefore()
    if (moment(deadlineFormatted).isBefore(today)) {
      Alert.alert('Please enter a valid date.');
      return;
    }

    setIsLoading(true);

    // The add method adds the new document to your collection with a random
    // unique ID. If you'd like to specify your own ID, call the set method on
    //  a DocumentReference instead

    firestore()
      .collection('Tasks')
      .add({
        userId: user.uid,
        checked: false,
        title,
        deadline,
        category,
      })
      .then(() => {
        setIsLoading(false);

        // WHY navigate only to Tabs ?
        navigation.navigate('Tabs', {screen: 'Tasks'});
        setTitle('');
        setDeadline(new Date());
        setCategory(null);
      })
      .catch(error => {
        setIsLoading(false);
        console.log('Error when adding task: ', error);
        Alert.alert(error.message);
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

      <ScrollView>
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

        {isLoading ? (
          <View style={styles.section}>
            <ActivityIndicator />
          </View>
        ) : (
          <View style={styles.button}>
            <Button style={styles.button} type="blue" onPress={onSubmit}>
              Add Task
            </Button>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(AddTasks);

import React, {memo, useState} from 'react';
import {Pressable, SafeAreaView, Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Title from '@components/Title';
import Input from '@components/Input';
import Categories from '@components/Categories';
import DateInput from '@components/DateInput';

import styles from './styles';

import categories from '../../../constants/categories';

const AddTasks = () => {
  const [category, setCategory] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
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
        <Input outline placeholder="Type here ..." />
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
    </SafeAreaView>
  );
};

export default memo(AddTasks);

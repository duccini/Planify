import {useNavigation} from '@react-navigation/native';
import React, {memo, useState} from 'react';

import {Pressable, SafeAreaView, Image, Text, View} from 'react-native';
import styles from './styles';
import Title from '@components/Title';
import Input from '@components/Input';
import Categories from '@components/Categories';
import categories from '../../../constants/categories';

const AddTasks = () => {
  const [category, setCategory] = useState('');
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

      <Text style={styles.label}>Describe the task</Text>
      <Input outline placeholder="Type here ..." />

      <View style={styles.section}>
        <Text style={styles.label}>Type</Text>
        <Categories
          categories={categories}
          selectedCategory={category}
          onCategoryPress={setCategory}
        />
      </View>
    </SafeAreaView>
  );
};

export default memo(AddTasks);

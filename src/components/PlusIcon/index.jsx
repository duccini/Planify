import React, {memo} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const PlusIcon = () => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('AddTask');
  };

  return (
    <Pressable style={styles.container} onPress={handleOnPress} hitSlop={8}>
      <Text style={styles.plus}>+</Text>
    </Pressable>
  );
};

export default memo(PlusIcon);

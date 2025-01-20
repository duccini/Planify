import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';

import {Pressable, SafeAreaView, Image} from 'react-native';
import styles from './styles';
import Title from '@components/Title';

const AddTasks = () => {
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
    </SafeAreaView>
  );
};

export default memo(AddTasks);

import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';

import {Pressable, SafeAreaView, Image} from 'react-native';
import styles from './styles';

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
    </SafeAreaView>
  );
};

export default memo(AddTasks);

import React, {memo} from 'react';
import {Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import getStyles from './styles';

const StatusCard = ({label, count, type}) => {
  const navigation = useNavigation();

  const styles = getStyles(type);

  const handleOnPress = () => {
    navigation.navigate('Tasks');
  };

  return (
    <Pressable style={styles.container} onPress={handleOnPress} hitSlop={8}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.count}>{count}</Text>
    </Pressable>
  );
};

export default memo(StatusCard);

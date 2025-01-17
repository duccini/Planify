import React, {memo} from 'react';

const {Pressable, Text} = require('react-native');

import styles from './styles';

const Button = ({type, children, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, type === 'blue' ? styles.blueBg : '']}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default memo(Button);

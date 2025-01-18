import React, {memo} from 'react';
import {Pressable, View} from 'react-native';

import styles from './styles';

const Checkbox = ({checked, handleCheckbox}) => {
  return (
    <Pressable onPress={handleCheckbox} style={styles.container}>
      {checked ? <View style={styles.innerView} /> : null}
    </Pressable>
  );
};

export default memo(Checkbox);

import React, {memo} from 'react';
import {Text} from 'react-native';

import styles from './styles';

const Title = ({text, type}) => {
  return (
    <Text style={[styles.title, type === 'thin' ? styles.thin : {}]}>
      {text}
    </Text>
  );
};

export default memo(Title);

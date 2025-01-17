import React, {memo} from 'react';

const {TextInput} = require('react-native');

import styles from './styles';
import colors from '../../styles/colors';

const Input = ({...props}) => {
  return (
    <TextInput
      placeholderTextColor={colors.midGrey}
      style={styles.input}
      {...props}
    />
  );
};

export default memo(Input);

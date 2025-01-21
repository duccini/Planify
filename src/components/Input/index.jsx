import React, {memo} from 'react';

const {TextInput} = require('react-native');

import styles from './styles';
import colors from '../../constants/colors';

const Input = ({outline, ...props}) => {
  return (
    <TextInput
      placeholderTextColor={colors.midGrey}
      style={[styles.input, outline ? styles.outline : {}]}
      {...props}
    />
  );
};

export default memo(Input);

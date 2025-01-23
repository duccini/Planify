import {StyleSheet, Dimensions} from 'react-native';
import colors from '@constants/colors';

const {width} = Dimensions.get('window');

const getStyles = type =>
  StyleSheet.create({
    container: {
      backgroundColor: type === 'error' ? colors.lightRed : colors.lightGrey,
      borderRadius: 15,
      padding: 12,
      width: (width - 64) / 3,
    },

    label: {
      marginBottom: 16,
      fontSize: 15,
      color: type === 'error' ? colors.red : colors.blue,
    },

    count: {
      fontSize: 28,
      fontWeight: type === 'error' ? '700' : '500',
      color: type === 'error' ? colors.red : colors.blue,
      marginBottom: 8,
    },
  });

export default getStyles;

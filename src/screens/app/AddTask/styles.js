import {StyleSheet} from 'react-native';
import colors from '@constants/colors';

const styles = StyleSheet.create({
  addTaskHeader: {
    padding: 24,
  },

  icon: {
    width: 32,
    height: 32,
  },

  section: {
    marginVertical: 12,
  },

  label: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '400',
    marginHorizontal: 24,
    marginBottom: 8,
  },

  button: {
    marginHorizontal: 24,
  },
});

export default styles;

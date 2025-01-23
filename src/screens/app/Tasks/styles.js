import {StyleSheet} from 'react-native';
import colors from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  task: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,

    marginHorizontal: 24,
    marginVertical: 8,
  },

  taskText: {
    color: colors.black,
    fontSize: 16,
  },

  taskDone: {
    textDecorationLine: 'line-through',
  },
});

export default styles;

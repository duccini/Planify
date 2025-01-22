import {StyleSheet} from 'react-native';
import colors from '@constants/colors';

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.black,
    paddingTop: 12,
    paddingBottom: 16,
  },

  thin: {
    fontSize: 24,
    fontWeight: '300',
    color: colors.purple,
    marginHorizontal: 24,
  },
});

export default styles;

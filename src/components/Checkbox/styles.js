import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.purple,
    borderRadius: 6,
    height: 20,
    width: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },

  innerView: {
    height: 11,
    width: 11,
    backgroundColor: colors.purple,
    borderRadius: 3,
  },
});

export default styles;

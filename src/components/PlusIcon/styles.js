import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: colors.blue,
    position: 'absolute',
    bottom: 24,
    right: 24,
  },

  plus: {
    fontSize: 40,
    lineHeight: 40,
    marginTop: 6,
    color: colors.white,
    fontWeight: '600',
  },
});

export default styles;

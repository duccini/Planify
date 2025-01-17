import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.white,

    marginHorizontal: 24,
  },

  footerText: {
    color: colors.midGrey,
    textAlign: 'center',
    fontSize: 16,
    marginTop: 28,
  },

  footerLink: {
    color: colors.purple,
    fontWeight: 'bold',
  },
});

export default styles;

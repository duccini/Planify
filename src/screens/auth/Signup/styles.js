import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.white,

    marginHorizontal: 24,
  },

  alerts: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,

    marginTop: 12,
    marginBottom: 36,
  },

  agreedText: {
    fontSize: 14,
    color: colors.grey,
  },

  links: {
    color: colors.purple,
    textDecorationLine: 'underline',
  },

  section: {
    marginVertical: 6,
  },

  footerText: {
    color: colors.midGrey,
    textAlign: 'center',
    fontSize: 16,
    marginTop: 16,
  },

  footerLink: {
    color: colors.purple,
    fontWeight: 'bold',
  },
});

export default styles;

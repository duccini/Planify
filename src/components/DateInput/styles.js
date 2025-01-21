import {StyleSheet} from 'react-native';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
  outline: {
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.black,
    marginHorizontal: 24,
    paddingHorizontal: 24,
    paddingVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },

  text: {
    color: colors.grey,
    fontSize: 15,
  },

  icon: {
    width: 24,
    height: 24,
  },
});

export default styles;

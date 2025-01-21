import {StyleSheet} from 'react-native';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 24,
    paddingVertical: 13,
    borderRadius: 10,
    color: colors.black,
    marginVertical: 6,
    fontSize: 16,
  },

  outline: {
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.black,
    marginHorizontal: 24,
  },
});

export default styles;

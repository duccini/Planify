import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 13,
    marginVertical: 8,
  },

  blueBg: {
    backgroundColor: colors.blue,
  },

  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;

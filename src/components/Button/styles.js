import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 13,
    marginVertical: 8,

    width: '100%',
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

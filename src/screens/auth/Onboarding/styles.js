import {StyleSheet} from 'react-native';
import colors from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: '100%',
    flex: 1,
  },

  footer: {
    height: 60,
    width: '100%',
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,

    position: 'absolute',
    bottom: 0,
  },

  content: {
    backgroundColor: colors.white,
    paddingHorizontal: 32,
    paddingBottom: 60,
  },

  title: {
    color: colors.black,
    textAlign: 'center',

    fontSize: 24,
    fontWeight: 'bold',
  },

  subtitle: {
    color: colors.grey,
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 16,
  },
});

export default styles;

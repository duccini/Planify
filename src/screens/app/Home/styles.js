import {StyleSheet} from 'react-native';
import colors from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  statusCardList: {
    marginHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  box: {
    marginTop: 64,
    marginHorizontal: 24,
    padding: 22,
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
  },

  boxTitle: {
    fontSize: 22,
    color: colors.purple,
    fontWeight: '700',
  },

  boxSubTitle: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 22,
    color: 'rgba(64, 53, 114, 0.5)',
  },
});

export default styles;

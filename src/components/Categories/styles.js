import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  item: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.blue,

    paddingVertical: 8,
    paddingHorizontal: 12,
  },

  activeItem: {
    color: colors.blue,
  },

  itemContainer: {
    marginRight: 12,
    marginBottom: 14,

    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.blue,
  },

  itemContainerSelected: {
    backgroundColor: colors.lightGrey,
    borderColor: colors.lightGrey,
    borderRadius: 10,
  },
});

export default styles;

import React from 'react';
import {FlatList, Pressable, Text} from 'react-native';

import styles from './styles';

const Categories = ({categories, selectedCategory, onCategoryPress}) => {
  return (
    <FlatList
      style={{marginTop: 16}}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      keyExtractor={item => String(item.value)}
      renderItem={({item, index}) => {
        const selected = selectedCategory === item.value;
        return (
          <Pressable
            onPress={() => onCategoryPress(item.value)}
            style={[
              styles.itemContainer,
              selected ? styles.itemContainerSelected : {},
              index === 0 ? {marginLeft: 24} : {},
            ]}>
            <Text style={[styles.item, selected ? styles.activeItem : {}]}>
              {item.label}
            </Text>
          </Pressable>
        );
      }}
    />
  );
};

export default React.memo(Categories);

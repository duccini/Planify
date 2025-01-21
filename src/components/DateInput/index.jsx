import React, {memo, useState} from 'react';

import {Pressable, Image, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

import styles from './styles';

const DateInput = ({value, onChange, ...props}) => {
  const [open, setOpen] = useState(false);

  const onDateOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Pressable onPress={onDateOpen} style={styles.outline}>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={require('@assets/calendar.png')}
        />
        <Text>{moment(value).format('DD/MM/YYYY') || 'Select Date...'}</Text>
      </Pressable>

      <DatePicker
        modal
        mode="date"
        locale="pt-BR"
        open={open}
        date={value}
        onConfirm={date => {
          setOpen(false);
          onChange(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default memo(DateInput);

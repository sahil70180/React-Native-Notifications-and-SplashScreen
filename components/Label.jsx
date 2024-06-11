import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Label = ({text}) => {
  return <Text style={styles.label}>{text}</Text>;
};

export default Label;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft : 18,
    marginTop : 12
  },
});

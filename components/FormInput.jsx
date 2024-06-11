import React from 'react';
import {Text, StyleSheet, TextInput} from 'react-native';

const FormInput = ({value, placeholder, onChangeText, secureTextEntry}) => {
  return (
    <TextInput
      editable
      maxLength={40}
      onChangeText={onChangeText}
      value={value}
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default FormInput;

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 12,
    marginTop: 2,
    borderWidth: 2,
    padding: 8,
    borderColor: '#2f4f4f',
    fontSize: 15,
    borderRadius: 4,
  },
});

import React from "react";
import { TextInput, StyleSheet } from "react-native";

const AmountInput = ({ placeholder, value, onChangeText }) => {
  const { inputStyle } = styles;
  return (
    <TextInput
      style={inputStyle}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    width: "20%",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#C7C7C7",
    padding: 8,
    margin: 10,
  },
});

export default AmountInput;

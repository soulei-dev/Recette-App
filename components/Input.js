import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = ({ onChangeText, value, placeholder }) => {
  const { inputStyle } = styles;

  return (
    <>
      <TextInput
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    width: "75%",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#C7C7C7",
    padding: 8,
    marginTop: 10,
  },
});

export default Input;

import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const AddButton = ({ label }) => {
  const { container, buttonContainer, labelStyle } = styles;
  return (
    <View style={container}>
      <TouchableOpacity style={buttonContainer}>
        <Ionicons name="add" size={20} color={Colors.primaryColor} />
        <Text style={labelStyle}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 200,
  },
  labelStyle: {
    fontFamily: "Montserrat-Regular",
    color: Colors.primaryColor,
    marginLeft: 5,
  },
});

export default AddButton;

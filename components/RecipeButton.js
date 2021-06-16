import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const RecipeButton = ({ label, onPress, iconName, colorIcon }) => {
  const { container, buttonContainer, labelStyle } = styles;
  return (
    <View style={container}>
      <TouchableOpacity style={buttonContainer} onPress={onPress}>
        <Ionicons name={iconName} size={20} color={colorIcon} />
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

export default RecipeButton;

import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const ImagePickerComponent = ({ label, onPress }) => {
  const { labelStyle, imageContainer, container } = styles;

  return (
    <>
      <View style={container}>
        <View>
          <Text style={labelStyle}>{label}</Text>
          <TouchableOpacity style={imageContainer} onPress={onPress}>
            <Ionicons
              name="add-outline"
              size={70}
              color={Colors.primaryColor}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontFamily: "Montserrat-Bold",
  },
  imageStyle: {
    width: 150,
    height: 150,
  },
  container: {
    alignItems: "center",
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ImagePickerComponent;

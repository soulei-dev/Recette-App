import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";

const CategoryGrid = ({ title, onSelect, image }) => {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity onPress={onSelect}>
        <ImageBackground
          imageStyle={{ borderRadius: 10 }}
          style={styles.imageContainer}
          source={{ uri: image }}
        >
          <Text style={styles.titleStyle}>{title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 10,
    width: 150,
    height: 150,
  },
  gridItem: {
    flex: 1,
    margin: 22,
    height: 160,
  },
  titleStyle: {
    textTransform: "uppercase",
    fontFamily: "Montserrat-Bold",
    fontSize: 15,
    textAlign: "center",
    color: "#FFF",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
});

export default CategoryGrid;

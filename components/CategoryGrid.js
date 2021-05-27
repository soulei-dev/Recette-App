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
    <TouchableOpacity style={styles.gridItem} onPress={onSelect}>
      <View>
        <ImageBackground
          imageStyle={{ borderRadius: 10 }}
          style={styles.imageContainer}
          source={image}
        >
          <Text
            style={{
              textTransform: "uppercase",
              fontFamily: "Montserrat-Bold",
              fontSize: 15,
              textAlign: "center",
              color: "#FFF",
              textShadowColor: "black",
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 2,
            }}
          >
            {title}
          </Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
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
    margin: 15,
    height: 160,
  },
});

export default CategoryGrid;

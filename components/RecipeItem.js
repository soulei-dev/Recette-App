import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const RecipeItem = ({ onSelectRecipe, name, duration, imageUrl }) => {
  return (
    <View style={styles.recipeItem}>
      <TouchableOpacity onPress={onSelectRecipe}>
        <View>
          <View style={{ ...styles.recipeRow, ...styles.recipeHeader }}>
            <ImageBackground source={{ uri: imageUrl }} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.recipeDuration}>{duration} minutes</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  recipeItem: {
    height: 200,
    width: "100%",
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  recipeDetail: {
    paddingHorizontal: 10,
    justifyContent: "flex-end",
  },
  recipeDuration: {
    textAlign: "right",
    fontFamily: "Montserrat-Bold",
    fontSize: 15,
    color: "#FFF",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
  title: {
    textTransform: "uppercase",
    fontFamily: "Montserrat-Bold",
    fontSize: 20,
    textAlign: "center",
    color: "#FFF",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});

export default RecipeItem;

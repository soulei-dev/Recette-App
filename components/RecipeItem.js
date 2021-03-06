import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Animated,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialIcons } from "@expo/vector-icons";

const RecipeItem = ({
  onSelectRecipe,
  name,
  duration,
  imageUrl,
  handleDelete,
  handleUpdate,
}) => {
  const rightSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0.6],
    });

    return (
      <TouchableOpacity activeOpacity={0.6} onPress={handleDelete}>
        <View style={styles.deleteBox}>
          <Animated.Text style={{ transform: [{ scale: scale }] }}>
            <MaterialIcons name="delete" size={25} color="white" />
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };

  const leftSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 1.3],
    });

    return (
      <TouchableOpacity activeOpacity={0.6} onPress={handleUpdate}>
        <View style={styles.updateBox}>
          <Animated.Text style={{ transform: [{ scale: scale }] }}>
            Editer
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={rightSwipe} renderLeftActions={leftSwipe}>
      <View style={styles.recipeItem}>
        <TouchableOpacity onPress={onSelectRecipe}>
          <View>
            <ImageBackground source={{ uri: imageUrl }} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.recipeDuration}>{duration} minutes</Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
    </Swipeable>
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
  deleteBox: {
    backgroundColor: "#ff3636",
    height: 200,
    justifyContent: "center",
    width: 130,
    alignItems: "center",
  },
  updateBox: {
    backgroundColor: "gray",
    height: 200,
    justifyContent: "center",
    width: 100,
    alignItems: "center",
  },
});

export default RecipeItem;

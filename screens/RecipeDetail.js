import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ImageBackground,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const RecipeDetail = ({ route, navigation }) => {
  const { recipeId, data } = route.params;
  const selectedRecipe = data.find((recipe) => recipe.id === recipeId);
  const ingredients = selectedRecipe.inputIngredients.map(
    (ingredient) => ingredient
  );
  const recipes = selectedRecipe.inputRecipes.map((ingredient) => ingredient);
  const { imageUrl, name, duration } = selectedRecipe;
  //   console.log(recipes);
  console.log("--INGREDIENT-- : " + ingredients);
  console.log(imageUrl);

  useEffect(() => {
    navigation.setOptions({ title: selectedRecipe.name });
  });

  //   Ingredients Item
  const ingredientsItem = () => {
    return ingredients.map((item, index) => (
      <View style={{ height: 200, margin: 3, flexBasis: "48%" }}>
        <Text style={styles.fontText}>
          {item.quantity} | {item.ingredients}
        </Text>
      </View>
    ));
  };

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={{ uri: imageUrl }}
        resizeMode="cover"
        style={{ width: "100%", height: 300, flex: 1 }}
      >
        <View style={styles.container}>
          {/* Header */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Text style={styles.title}>{name}</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialIcons
                name="timer"
                size={22}
                color={Colors.primaryColor}
                style={{ paddingRight: 5 }}
              />
              <Text style={styles.fontText}>{duration} min</Text>
            </View>
          </View>
          {/* Ingredients and Recipe section*/}
          <Text>Ingrédients</Text>
          <View style={styles.ingredientItems}>{ingredientsItem()}</View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    textTransform: "uppercase",
    fontFamily: "Montserrat-Bold",
    fontSize: 20,
  },
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    marginTop: 150,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  ingredientContainer: {
    fontFamily: "Montserrat-Regular",
    width: "50%",
    height: "20%",
  },
  fontText: {
    fontFamily: "Montserrat-Regular",
    paddingRight: 10,
  },
  ingredientItems: {
    borderWidth: 1,
    overflow: "hidden",
    flexWrap: "wrap",
    flexDirection: "row",
  },
});

export default RecipeDetail;

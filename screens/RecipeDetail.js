import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { RECIPES } from "../data/fake-data";

const RecipeDetail = ({ route, navigation }) => {
  const { recipeId } = route.params;
  const selectedRecipe = RECIPES.find((recipe) => recipe.id === recipeId);

  useEffect(() => {
    navigation.setOptions({ title: selectedRecipe.name });
  });

  return (
    <View style={styles.screen}>
      <Text>{selectedRecipe.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RecipeDetail;

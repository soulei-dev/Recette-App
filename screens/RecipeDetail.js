import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

const RecipeDetail = ({ route, navigation }) => {
  const { recipeId, data } = route.params;
  const selectedRecipe = data.find((recipe) => recipe.id === recipeId);

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

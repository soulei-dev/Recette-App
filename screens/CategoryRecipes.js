import React, { useEffect } from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import { CATEGORIES } from "../data/fake-data";

const CategoryRecipes = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  useEffect(() => {
    navigation.setOptions({ title: selectedCategory.title });
  });
  return (
    <View style={styles.screen}>
      <Text>Ecran de la catégorie des recettes !</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Detail"
        onPress={() => {
          navigation.push("RecipeDetail");
        }}
      />
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

export default CategoryRecipes;

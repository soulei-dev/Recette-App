import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";

const CategoryRecipes = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Ecran de la catégorie des recettes !</Text>
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

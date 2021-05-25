import React from "react";
import { View, Text } from "react-native";

const CategoryRecipes = () => {
  return (
    <View style={styles.screen}>
      <Text>Ecran de la catégorie des recettes !</Text>
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

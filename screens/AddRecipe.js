import React from "react";
import { Text, View, StyleSheet } from "react-native";

const AddRecipe = () => {
  return (
    <View style={styles.screen}>
      <Text>Ajouter une nouvelle recette !</Text>
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

export default AddRecipe;

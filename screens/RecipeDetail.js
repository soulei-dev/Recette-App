import React from "react";
import { StyleSheet, View, Text } from "react-native";

const RecipeDetail = () => {
  return (
    <View style={styles.screen}>
      <Text>Ecran du détail de la recette !</Text>
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

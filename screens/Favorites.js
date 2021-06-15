import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Favorites = () => {
  return (
    <View style={styles.screen}>
      <Text>Ecran des recettes favoris !</Text>
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

export default Favorites;

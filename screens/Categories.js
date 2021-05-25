import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Categories = () => {
  return (
    <View style={styles.screen}>
      <Text>Ecran des catégories !</Text>
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

export default Categories;

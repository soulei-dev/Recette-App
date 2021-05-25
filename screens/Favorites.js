import React from "react";
import { View, Text } from "react-native";

const Favorites = () => {
  return (
    <View style={styles.screen}>
      <Text>Ecran des favories !</Text>
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

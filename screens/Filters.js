import React from "react";
import { View, Text } from "react-native";

const Filters = () => {
  return (
    <View style={styles.screen}>
      <Text>Ecran des filtres !</Text>
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

export default Filters;

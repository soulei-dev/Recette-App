import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const CategoryGrid = ({ title, onSelect, color }) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={onSelect}>
      <View style={{ ...styles.gridContainer, ...{ backgroundColor: color } }}>
        <Text
          style={{
            textTransform: "uppercase",
            fontFamily: "Montserrat-Bold",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 10,
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoryGrid;

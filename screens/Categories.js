import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/fake-data";
import CategoryGrid from "../components/CategoryGrid";

const Categories = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate("CategoryRecipes", {
            categoryId: itemData.item.id,
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyboardShouldPersistTaps="handled"
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
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

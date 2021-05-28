import React, { useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { CATEGORIES, RECIPES } from "../data/fake-data";
import RecipeItem from "../components/RecipeItem";

const CategoryRecipes = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
  const displayRecipes = RECIPES.filter(
    (recipe) => recipe.categoryIds.indexOf(categoryId) >= 0
  );

  useEffect(() => {
    navigation.setOptions({ title: selectedCategory.title });
  });

  const renderRecipeItem = (itemData) => {
    return (
      <RecipeItem
        name={itemData.item.name}
        onSelectRecipe={() => {}}
        duration={itemData.item.duration}
        imageUrl={itemData.item.imageUrl}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayRecipes}
        keyExtractor={(item, index) => item.id}
        renderItem={renderRecipeItem}
        style={{ width: "90%" }}
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

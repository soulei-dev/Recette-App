import React, { useEffect } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { CATEGORIES, RECIPES } from "../data/fake-data";
import RecipeItem from "../components/RecipeItem";
import Colors from "../constants/Colors";
import { Entypo } from "@expo/vector-icons";

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
        duration={itemData.item.duration}
        imageUrl={itemData.item.imageUrl}
        onSelectRecipe={() => {
          navigation.navigate("RecipeDetail", {
            recipeId: itemData.item.id,
          });
        }}
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
      <TouchableOpacity
        style={styles.floatingActionButton}
        onPress={() => {
          navigation.navigate("AddRecipe");
        }}
      >
        <Entypo name="plus" color="white" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  floatingActionButton: {
    backgroundColor: Colors.primaryColor,
    width: 45,
    height: 45,
    position: "absolute",
    bottom: 15,
    right: 10,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryRecipes;

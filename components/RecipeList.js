import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import RecipeItem from "../components/RecipeItem";

const RecipeList = ({ listData, navigation }) => {
  const renderRecipeItem = (itemData) => {
    return (
      <RecipeItem
        name={itemData.item.name}
        duration={itemData.item.duration}
        imageUrl={itemData.item.imageUrl}
        onSelectRecipe={() => {
          navigation.navigate("RecipeDetail", {
            recipeId: itemData.item.id,
            data: listData,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={listData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderRecipeItem}
        style={{ width: "90%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RecipeList;

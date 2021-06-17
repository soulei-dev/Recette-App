import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import RecipeItem from "../components/RecipeItem";
import api from "../api/api";

const RecipeList = ({ listData, navigation }) => {
  const [recipeData, setRecipeData] = useState();

  useEffect(() => {
    setRecipeData(listData);
  }, [listData]);

  const renderRecipeItem = (itemData) => {
    const deleteItem = (id) => {
      api.delete("/recipes/" + id).then((res) => {
        if (res.data != null) {
          alert("Votre recette a bien été supprimer !");
          const recipeId = recipeData.filter((item) => item.id !== id);
          setRecipeData(recipeId);
        }
      });
    };

    const updateItem = (id) => {
      alert(id);
    };
    return (
      <RecipeItem
        name={itemData.item.name}
        duration={itemData.item.duration}
        imageUrl={itemData.item.imageUrl}
        onSelectRecipe={() => {
          navigation.navigate("RecipeDetail", {
            recipeId: itemData.item.id,
            data: recipeData,
          });
        }}
        handleDelete={() => deleteItem(itemData.item.id)}
        handleUpdate={() => updateItem(itemData.item.id)}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={recipeData}
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

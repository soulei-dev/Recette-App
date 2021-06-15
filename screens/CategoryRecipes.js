import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import api from "../api/api";
import RecipeList from "../components/RecipeList";
import Colors from "../constants/Colors";
import { Entypo } from "@expo/vector-icons";

const CategoryRecipes = ({ route, navigation }) => {
  const [dataRecipes, setDataRecipes] = useState([]);
  //   const [isLoading, setLoading] = useState(true);
  const { categoryId, data } = route.params;
  const selectedCategory = data.find((cat) => cat.id === categoryId);
  const displayRecipes = dataRecipes.filter((recipe) => {
    return recipe.categoryIds.toString().indexOf(categoryId) >= 0;
  });
  console.log("--DISPLAY RECIPES-- : " + displayRecipes);

  useEffect(() => {
    navigation.setOptions({
      title: selectedCategory.title,
    });
  });

  useEffect(() => {
    navigation.addListener("focus", async () => {
      api
        .get("/recipes")
        .then(({ data }) => {
          data.filter((obj) => {
            console.log(obj);
            setDataRecipes(data);
          });
        })
        .catch((error) => console.error(error));
    });
  }, []);

  return (
    <>
      <RecipeList listData={displayRecipes} navigation={navigation} />
      <TouchableOpacity
        style={styles.floatingActionButton}
        onPress={() => {
          navigation.navigate("AddRecipe", {
            catId: categoryId,
          });
        }}
      >
        <Entypo name="plus" color="white" size={20} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  floatingActionButton: {
    backgroundColor: Colors.primaryColor,
    width: 45,
    height: 45,
    position: "absolute",
    bottom: 25,
    right: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryRecipes;

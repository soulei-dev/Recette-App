import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import api from "../api/api";
import RecipeItem from "../components/RecipeItem";
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
    navigation.setOptions({ title: selectedCategory.title });
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

  const renderRecipeItem = (itemData) => {
    return (
      <RecipeItem
        name={itemData.item.name}
        duration={itemData.item.duration}
        imageUrl={itemData.item.imageUrl}
        onSelectRecipe={() => {
          navigation.navigate("RecipeDetail", {
            recipeId: itemData.item.id,
            data: dataRecipes,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <>
        <FlatList
          data={displayRecipes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderRecipeItem}
          style={{ width: "90%" }}
        />
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

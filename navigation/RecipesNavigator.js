import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../constants/Colors";
import Categories from "../screens/Categories";
import Filters from "../screens/Filters";
import Favorites from "../screens/Favorites";
import CategoryRecipes from "../screens/CategoryRecipes";
import RecipeDetail from "../screens/RecipeDetail";
import AddCategory from "../screens/AddCategory";

const Tabs = createBottomTabNavigator();
const CategoriesStack = createStackNavigator();
const FiltersStack = createStackNavigator();
const FavoritesStack = createStackNavigator();

const CategoriesStackScreen = () => (
  <CategoriesStack.Navigator>
    <CategoriesStack.Screen
      name="Categories"
      component={Categories}
      options={{ title: "Catégories des recettes" }}
    />
    <CategoriesStack.Screen
      name="CategoryRecipes"
      component={CategoryRecipes}
      options={{ title: "Recettes" }}
    />
    <CategoriesStack.Screen
      name="RecipeDetail"
      component={RecipeDetail}
      options={{ title: "Détail de la recette" }}
    />
    <CategoriesStack.Screen
      name="AddCategory"
      component={AddCategory}
      options={{ title: "Ajouter une catégorie" }}
    />
  </CategoriesStack.Navigator>
);

const FiltersStackScreen = () => (
  <FiltersStack.Navigator>
    <FiltersStack.Screen name="Filtrer" component={Filters} />
  </FiltersStack.Navigator>
);

const FavoritesStackScreen = () => (
  <FavoritesStack.Navigator>
    <FavoritesStack.Screen name="Favoris" component={Favorites} />
  </FavoritesStack.Navigator>
);

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

export default function RecipesNavigator() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tabs.Navigator tabBarOptions={{ activeTintColor: Colors.primaryColor }}>
        <Tabs.Screen name="Home" component={CategoriesStackScreen} />
        <Tabs.Screen name="Filtrer" component={FiltersStackScreen} />
        <Tabs.Screen name="Favoris" component={FavoritesStackScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

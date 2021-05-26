import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../constants/Colors";
import Categories from "../screens/Categories";
import Filters from "../screens/Filters";
import Favorites from "../screens/Favorites";
import CategoryRecipes from "../screens/CategoryRecipes";
import RecipeDetail from "../screens/RecipeDetail";

const Tabs = createBottomTabNavigator();
const CategoriesStack = createStackNavigator();
const FiltersStack = createStackNavigator();
const FavoritesStack = createStackNavigator();

const CategoriesStackScreen = () => (
  <CategoriesStack.Navigator>
    <CategoriesStack.Screen
      name="Categories"
      component={Categories}
      options={{ headerTitle: "Catégories des recettes" }}
    />
    <CategoriesStack.Screen
      name="CategoryRecipes"
      component={CategoryRecipes}
      options={{ headerTitle: "Recettes" }}
    />
    <CategoriesStack.Screen
      name="RecipeDetail"
      component={RecipeDetail}
      options={{ headerTitle: "Détail de la recette" }}
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

export default function RecipesNavigator() {
  return (
    <NavigationContainer>
      <Tabs.Navigator tabBarOptions={{ activeTintColor: Colors.primaryColor }}>
        <Tabs.Screen name="Home" component={CategoriesStackScreen} />
        <Tabs.Screen name="Filtrer" component={FiltersStackScreen} />
        <Tabs.Screen name="Favoris" component={FavoritesStackScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

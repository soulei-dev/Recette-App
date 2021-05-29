import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import Categories from "../screens/Categories";
import Filters from "../screens/Filters";
import Favorites from "../screens/Favorites";
import CategoryRecipes from "../screens/CategoryRecipes";
import RecipeDetail from "../screens/RecipeDetail";
import AddCategory from "../screens/AddCategory";
import AddRecipe from "../screens/AddRecipe";

const Tabs = createMaterialBottomTabNavigator();
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
    <CategoriesStack.Screen
      name="AddRecipe"
      component={AddRecipe}
      options={{ title: "Ajouter une nouvelle recette" }}
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
      <Tabs.Navigator
        activeColor={Colors.primaryColor}
        barStyle={{ backgroundColor: "#FFF", height: 70 }}
        inactiveColor="#4a4a4a"
      >
        <Tabs.Screen
          name="Categories"
          options={{
            tabBarLabel: "Menu",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="menu-book" size={26} color={color} />
            ),
          }}
          component={CategoriesStackScreen}
        />
        <Tabs.Screen
          name="Filter"
          options={{
            tabBarLabel: "Filtre",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="filter-alt" size={26} color={color} />
            ),
          }}
          component={FiltersStackScreen}
        />
        <Tabs.Screen
          name="Favorite"
          options={{
            tabBarLabel: "Favoris",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="favorite-outline" size={26} color={color} />
            ),
          }}
          component={FavoritesStackScreen}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

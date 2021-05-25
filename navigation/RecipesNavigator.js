import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Categories from "../screens/Categories";
import Filters from "../screens/Filters";
import Favorites from "../screens/Favorites";

const Tabs = createBottomTabNavigator();
const CategoriesStack = createStackNavigator();
const FiltersStack = createStackNavigator();
const FavoritesStack = createStackNavigator();

const CategoriesStackScreen = () => (
  <CategoriesStack.Navigator>
    <CategoriesStack.Screen name="Home" component={Categories} />
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
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={CategoriesStackScreen} />
        <Tabs.Screen name="Filtrer" component={FiltersStackScreen} />
        <Tabs.Screen name="Favoris" component={FavoritesStackScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

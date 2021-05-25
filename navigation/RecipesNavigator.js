import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Categories from "../screens/Categories";
import Filters from "../screens/Filters";
import Favorites from "../screens/Favorites";

const Tabs = createBottomTabNavigator();

export default function RecipesNavigator() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={Categories}></Tabs.Screen>
        <Tabs.Screen name="Filtrer" component={Filters}></Tabs.Screen>
        <Tabs.Screen name="Favoris" component={Favorites}></Tabs.Screen>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

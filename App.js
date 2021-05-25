import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import RecipesNavigator from "./navigation/RecipesNavigator";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <RecipesNavigator />;
}

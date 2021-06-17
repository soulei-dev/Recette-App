import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const RecipeDetail = ({ route, navigation }) => {
  const { recipeId, data } = route.params;
  const selectedRecipe = data.find((recipe) => recipe.id === recipeId);
  const ingredients = selectedRecipe.inputIngredients.map(
    (ingredient) => ingredient
  );
  const recipes = selectedRecipe.inputRecipes.map((ingredient) => ingredient);
  const { imageUrl, name, duration } = selectedRecipe;

  useEffect(() => {
    navigation.setOptions({
      title: selectedRecipe.name,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favoris"
            iconName="heart-outline"
            onPress={() => {
              console.log("--Added into Favorite screen !--");
            }}
          />
        </HeaderButtons>
      ),
    });
  });

  //   Ingredients Item
  const ingredientsItem = () => {
    return ingredients.map((item, index) => (
      <View
        key={index}
        style={{
          marginTop: 10,
          marginLeft: 5,
          flexBasis: "48%",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <MaterialCommunityIcons
          name="silverware-spoon"
          size={21}
          color={Colors.primaryColor}
        />
        <Text style={{ paddingLeft: 10, fontFamily: "Montserrat-Regular" }}>
          {item.quantity} {item.ingredients}
        </Text>
      </View>
    ));
  };
  // Recipe Item
  const recipeItem = () => {
    return recipes.map((item, index) => (
      <View key={index}>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={styles.stepStyle}>
            <Text
              style={{
                fontFamily: "Montserrat-Bold",
                textAlign: "center",
                color: Colors.primaryColor,
              }}
            >
              {item.step}
            </Text>
          </View>
          <View style={{ marginLeft: 10, width: 335 }}>
            <Text style={{ fontFamily: "Montserrat-Regular" }}>
              {item.description}
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "#e3e3e3",
            borderBottomWidth: 1,
          }}
        />
      </View>
    ));
  };

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={{ uri: imageUrl }}
        resizeMode="cover"
        style={{ width: "100%", height: 300, flex: 1 }}
      >
        <View style={styles.container}>
          {/* Header */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Text style={styles.title}>{name}</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialIcons
                name="timer"
                size={22}
                color={Colors.primaryColor}
                style={{ paddingRight: 5 }}
              />
              <Text style={{ fontFamily: "Montserrat-Regular" }}>
                {duration} min
              </Text>
            </View>
          </View>
          <SafeAreaView style={{ marginBottom: 100 }}>
            <ScrollView style={{ marginBottom: 100 }}>
              {/* Ingredients */}
              <Text style={styles.contentTitle}>Ingrédients</Text>
              <View style={styles.ingredientItems}>{ingredientsItem()}</View>
              {/* Recipe */}
              <Text style={styles.contentTitle}>Recette</Text>
              <View>{recipeItem()}</View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    textTransform: "uppercase",
    fontFamily: "Montserrat-Bold",
    fontSize: 20,
  },
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    marginTop: 150,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  ingredientContainer: {
    fontFamily: "Montserrat-Regular",
    width: "50%",
    height: "20%",
  },
  ingredientItems: {
    overflow: "hidden",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  contentTitle: {
    fontSize: 20,
    fontFamily: "Montserrat-Regular",
    padding: 10,
    marginTop: 20,
  },
  stepStyle: {
    margin: 5,
    borderWidth: 1,
    borderColor: "#ebebeb",
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    padding: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default RecipeDetail;

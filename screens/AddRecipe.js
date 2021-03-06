import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import api from "../api/api";
import Input from "../components/Input";
import ImagePickerComponent from "../components/ImagePickerComponent";
import AmountInput from "../components/AmountInput";
import * as ImagePicker from "expo-image-picker";
import RecipeButton from "../components/RecipeButton";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const AddRecipe = ({ navigation, route }) => {
  const { catId } = route.params;
  const [imageUrl, setImageUrl] = useState(null);
  const [enteredName, setEnteredName] = useState("");
  const [duration, setDuration] = useState("");
  const [inputIngredients, setInputIngredients] = useState([]);
  const [textInputIngredient, setTextInputIngredient] = useState([]);
  const [textInputRecipe, setTextInputRecipe] = useState([]);
  const [inputRecipes, setInputRecipes] = useState([]);

  // Header Button
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favoris"
            iconName="send-circle"
            onPress={() => createNewRecipe()}
          />
        </HeaderButtons>
      ),
    });
  });

  // ** Image Control ** //
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Désolé, nous avons besoin des autorisations de la caméra !");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUrl(result.uri);
    }
  };

  // ** Function to add TextInput Ingredients dynamically ** //
  const addTextInputIngredient = (index) => {
    let inputs = [...textInputIngredient];
    inputs.push(
      <View key={index} style={styles.inputContainer}>
        <AmountInput
          placeholder="Quantité"
          onChangeText={(quantity) => addQuantitys(quantity, index)}
        />
        <Input
          placeholder="Ingrédient"
          onChangeText={(ingredients) => addIngredients(ingredients, index)}
        />
      </View>
    );
    setTextInputIngredient(inputs);
  };

  // ** Function to remove last item in TextInput Ingredients ** //
  const removeTextInputIngredient = () => {
    let inputs = [...textInputIngredient];
    inputs.splice(-1, 1);
    setTextInputIngredient(inputs);
  };

  // ** Function to add TextInput Recipe dynamicaly ** //
  const addTextInputRecipe = (index) => {
    let inputs = [...textInputRecipe];
    inputs.push(
      <View key={index} style={styles.inputContainer}>
        <AmountInput
          placeholder="Etape"
          onChangeText={(step) => addSteps(step, index)}
        />
        <Input
          placeholder="Description"
          onChangeText={(description) => addDescriptions(description, index)}
        />
      </View>
    );
    setTextInputRecipe(inputs);
  };

  // ** Function to remove last item in TextInput Recipe ** //
  const removeTextInputRecipe = () => {
    let inputs = [...textInputRecipe];
    inputs.splice(-1, 1);
    setTextInputRecipe(inputs);
  };

  // ** Functions to add quantity and ingredients into single array. ** //
  const addQuantitys = (quantity, index) => {
    let dataArray = inputIngredients;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.quantity = quantity;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      setInputIngredients(dataArray);
    } else {
      dataArray.push({
        quantity: quantity,
        index: index,
      });
      setInputIngredients(dataArray);
    }
  };

  const addIngredients = (ingredients, index) => {
    let dataArray = inputIngredients;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.ingredients = ingredients;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      setInputIngredients(dataArray);
    } else {
      dataArray.push({
        ingredients: ingredients,
        index: index,
      });
      setInputIngredients(dataArray);
    }
  };

  // ** Function to add steps & descriptions into single array ** //
  const addSteps = (step, index) => {
    let dataArray = inputRecipes;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.step = step;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      setInputRecipes(dataArray);
    } else {
      dataArray.push({
        step: step,
        index: index,
      });
      setInputRecipes(dataArray);
    }
  };

  const addDescriptions = (description, index) => {
    let dataArray = inputRecipes;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.description = description;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      setInputRecipes(dataArray);
    } else {
      dataArray.push({
        description: description,
        index: index,
      });
      setInputRecipes(dataArray);
    }
  };

  // ** Send control ** //
  const createNewRecipe = () => {
    if (
      enteredName === "" ||
      imageUrl === null ||
      duration === "" ||
      inputIngredients.length === 0 ||
      inputRecipes.length === 0
    ) {
      alert("Tout les champs doivent être remplit !");
    } else {
      api
        .post("/recipes", {
          imageUrl: imageUrl,
          name: enteredName,
          duration: duration,
          inputRecipes: inputRecipes,
          inputIngredients: inputIngredients,
          categoryIds: catId,
        })
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        {/* Image */}
        {imageUrl === null ? (
          <ImagePickerComponent label="Photos" onPress={pickImage} />
        ) : (
          <View style={{ alignItems: "center" }}>
            <Image
              style={{ width: "90%", height: 150, borderRadius: 10 }}
              source={{ uri: imageUrl }}
            />
          </View>
        )}
        {/* Name */}
        <Text style={styles.titleStyle}>Nom</Text>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Macaron"
            onChangeText={(enteredName) => setEnteredName(enteredName)}
            value={enteredName}
          />
          <AmountInput
            placeholder="Durée"
            onChangeText={(duration) => setDuration(duration)}
          />
        </View>
        {/* Ingredients input */}
        <Text style={styles.titleStyle}>Ingrédients</Text>
        {textInputIngredient.map((el) => {
          return el;
        })}
        {/* Add and remove ingredient */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <RecipeButton
            label="Ajouter ingrédient"
            iconName="add-circle-sharp"
            colorIcon="green"
            onPress={() => addTextInputIngredient(textInputIngredient.length)}
          />
          <RecipeButton
            label="Supprimer"
            iconName="remove-circle"
            colorIcon="red"
            onPress={() =>
              removeTextInputIngredient(textInputIngredient.length)
            }
          />
        </View>
        {/* Recipes input */}
        <Text style={styles.titleStyle}>Recette</Text>
        {textInputRecipe.map((el) => {
          return el;
        })}
        {/* Add and delete step of recipe */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <RecipeButton
            label="Nouvelle étape"
            iconName="add-circle-sharp"
            colorIcon="green"
            onPress={() => addTextInputRecipe(textInputRecipe.length)}
          />
          <RecipeButton
            label="Supprimer"
            iconName="remove-circle"
            colorIcon="red"
            onPress={() => removeTextInputRecipe(textInputRecipe.length)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  titleStyle: {
    marginLeft: 10,
    fontSize: 20,
    marginTop: 20,
    fontFamily: "Montserrat-Regular",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default AddRecipe;

import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import api from "../api/api";
import Input from "../components/Input";
import ImagePickerComponent from "../components/ImagePickerComponent";
import AmountInput from "../components/AmountInput";
import AddButton from "../components/AddButton";

const AddRecipe = ({ imageUrl, navigation }) => {
  const [enteredName, setEnteredName] = useState("");
  const [duration, setDuration] = useState(0);
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [amount, setAmount] = useState(0);

  // Send Control
  const createNewRecipe = () => {
    if (enteredName === "" || imageUrl === null) {
      return;
    } else {
      api
        .post("/recipes", {
          imageUrl: imageUrl,
          name: enteredName,
          duration: duration,
          ingredients: ingredients,
          steps: steps,
          amount: amount,
        })
        .then(({ data }) => {
          console.log(data);
          setEnteredName("");
          navigation.navigate("CategoryRecipes");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <View style={styles.screen}>
      {/* Image */}
      <ImagePickerComponent label="Photos" />
      {/* Name */}
      <Text style={styles.titleStyle}>Nom</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Macaron"
          onChangeText={(enteredName) => setEnteredName(enteredName)}
          value={enteredName}
        />
        <AmountInput placeholder="Durée" />
      </View>
      {/* Ingredients input */}
      <Text style={styles.titleStyle}>Ingrédients</Text>
      <View style={styles.inputContainer}>
        <AmountInput placeholder="Quantité" />
        <Input placeholder="Ingrédient 1" />
      </View>
      <View style={styles.inputContainer}>
        <AmountInput placeholder="Quantité" />
        <Input placeholder="Ingrédient 2" />
      </View>
      {/* Add ingredient */}
      <AddButton label="Ajouter ingrédient" />
      {/* Recipe steps */}
      <Text style={styles.titleStyle}>Recette</Text>
      <View style={styles.inputContainer}>
        <AmountInput placeholder="Étape 1" />
        <Input placeholder="Description" />
      </View>
      <AddButton label="Nouvelle étape" />
    </View>
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

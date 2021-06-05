import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import api from "../api/api";
import Input from "../components/Input";
import ImagePickerComponent from "../components/ImagePickerComponent";
import AmountInput from "../components/AmountInput";
import AddButton from "../components/AddButton";

const AddRecipe = ({ imageUrl, navigation }) => {
  const [enteredName, setEnteredName] = useState("");
  const [duration, setDuration] = useState([]);
  const [inputIngredients, setInputIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [textInput, setTextInput] = useState([]);

  // Function to add TextInput dynamically
  const addTextInput = (index) => {
    let inputs = [...textInput];
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
    setTextInput(inputs);
  };

  //   Functions to add quantity and ingredients into single array.
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

  //   Function to console output
  const getValues = () => {
    inputIngredients.filter((obj) => {
      return console.log(
        "Ingrédients: " + obj.ingredients,
        "Quantités: " + obj.quantity
      );
    });
  };

  // Send control
  const createNewRecipe = () => {
    if (
      enteredName === "" ||
      imageUrl === null ||
      duration === 0 ||
      inputIngredients.length === 0 ||
      steps === ""
    ) {
      return;
    } else {
      api
        .post("/recipes", {
          imageUrl: imageUrl,
          name: enteredName,
          duration: duration,
          steps: steps,
          inputIngredients: inputIngredients,
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
        <AmountInput
          placeholder="Durée"
          onChangeText={(duration) => setDuration(duration)}
        />
      </View>
      {/* Ingredients input */}
      <Text style={styles.titleStyle}>Ingrédients</Text>
      {textInput.map((el) => {
        return el;
      })}
      {/* Add ingredient */}
      <AddButton
        label="Ajouter ingrédient"
        onPress={() => addTextInput(textInput.length)}
      />
      {/* Recipe steps */}
      <Text style={styles.titleStyle}>Recette</Text>
      <View style={styles.inputContainer}>
        <AmountInput placeholder="Étape 1" />
        <Input placeholder="Description" />
      </View>
      <AddButton label="Nouvelle étape" onPress={() => getValues()} />
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

{
  /* <View style={styles.inputContainer}>
        <AmountInput
          placeholder="Quantité"
          onChangeText={(quantity) => {
            setQuantity(quantity);
          }}
        />
        <Input
          placeholder="Ingrédient"
          onChangeText={(ingredients) => {
            setIngredients(ingredients);
          }}
        />
      </View> */
}

import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  Image,
} from "react-native";
import api from "../api/api";
import Input from "../components/Input";
import ImagePickerComponent from "../components/ImagePickerComponent";
import AmountInput from "../components/AmountInput";
import * as ImagePicker from "expo-image-picker";
import AddButton from "../components/AddButton";

const AddRecipe = ({ navigation }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [enteredName, setEnteredName] = useState("");
  const [duration, setDuration] = useState("");
  const [inputIngredients, setInputIngredients] = useState([]);
  const [textInputIngredient, setTextInputIngredient] = useState([]);
  const [textInputRecipe, setTextInputRecipe] = useState([]);
  const [inputRecipes, setInputRecipes] = useState([]);

  // Image Control
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

    console.log(result);

    if (!result.cancelled) {
      setImageUrl(result.uri);
    }
  };

  // Function to add TextInput Ingredient dynamically
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

  // Function to add TextInput Recipe dynamicaly
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

  // Function to add steps & descriptions into single array
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

  //   Function to console output
  const getValuesIngredient = () => {
    inputIngredients.filter((obj) => {
      return console.log(
        "Ingrédients: " + obj.ingredients,
        "Quantités: " + obj.quantity
      );
    });
  };

  const getValuesRecipe = () => {
    inputRecipes.filter((obj) => {
      return console.log(
        "Step: " + obj.step,
        "description: " + obj.description
      );
    });
  };

  // Send control
  const createNewRecipe = () => {
    if (
      enteredName === "" ||
      imageUrl === null ||
      duration === "" ||
      inputIngredients.length === 0 ||
      inputRecipes.length === 0
    ) {
      alert("no");
    } else {
      api
        .post("/recipes", {
          imageUrl: imageUrl,
          name: enteredName,
          duration: duration,
          inputRecipes: inputRecipes,
          inputIngredients: inputIngredients,
        })
        .then(({ data }) => {
          console.log(data);
          navigation.navigate("CategoryRecipes");
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
        {/* Add ingredient */}
        <AddButton
          label="Ajouter ingrédient"
          onPress={() => addTextInputIngredient(textInputIngredient.length)}
        />
        {/* Recipes input */}
        <Text style={styles.titleStyle}>Recette</Text>
        {/* Recipes input */}
        {textInputRecipe.map((el) => {
          return el;
        })}
        <AddButton
          label="Nouvelle étape"
          onPress={() => addTextInputRecipe(textInputRecipe.length)}
        />
        <Button title="SEND REQUEST" onPress={() => createNewRecipe()} />
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

import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import api from "../api/api";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import Input from "../components/Input";
import ImagePickerComponent from "../components/ImagePickerComponent";

const AddRecipe = () => {
  const [enteredName, setEnteredName] = useState("");
  const [duration, setDuration] = useState(0);
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [amount, setAmount] = useState(0);

  // Send Control
  const createNewRecipe = () => {
    if (enteredName === "") {
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
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <View style={styles.screen}>
      {/* Image */}
      <ImagePickerComponent label="Photos" />
      {/* Name */}
      <Text
        style={{
          marginLeft: 20,
          fontSize: 20,
          marginTop: 40,
          fontFamily: "Montserrat-Regular",
        }}
      >
        Nom
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "flex-end",
        }}
      >
        <Input
          placeholder="Macaron"
          onChangeText={(enteredName) => setEnteredName(enteredName)}
          value={enteredName}
        />
        {/* Send Button */}
        <TouchableOpacity
          onPress={() => {
            createNewCategory();
            navigation.navigate("Categories");
          }}
        >
          <MaterialIcons
            name="add-circle"
            size={42}
            color={Colors.primaryColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default AddRecipe;

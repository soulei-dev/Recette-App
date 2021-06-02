import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import api from "../api/api";
import Input from "../components/Input";
import ImagePickerComponent from "../components/ImagePickerComponent";

const AddCategory = ({ navigation, imageUrl }) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  // Send Control
  const createNewCategory = () => {
    if (enteredTitle === "" || imageUrl === null) {
      return null;
    } else {
      api
        .post("/categories", {
          imageUrl: imageUrl,
          title: enteredTitle,
        })
        .then(({ data }) => {
          console.log(data);
          setEnteredTitle("");
          navigation.navigate("Categories");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <View style={styles.screen}>
      {/* Image */}
      <View>
        <ImagePickerComponent label="Photos" />
      </View>

      {/* Title */}
      <Text
        style={{
          marginLeft: 20,
          fontSize: 20,
          marginTop: 40,
          fontFamily: "Montserrat-Regular",
        }}
      >
        Titre
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "flex-end",
        }}
      >
        <Input
          placeholder="Pâtisserie"
          onChangeText={(enteredTitle) => setEnteredTitle(enteredTitle)}
          value={enteredTitle}
        />
        {/* Send Button */}
        <TouchableOpacity
          onPress={() => {
            createNewCategory();
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

export default AddCategory;

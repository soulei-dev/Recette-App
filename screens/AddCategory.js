import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import api from "../api/api";

const AddCategory = () => {
  // const [image, setImage] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");

  const createNewCategory = () => {
    if (enteredTitle === "") {
      return;
    } else {
      api
        .post("/categories", {
          // image: image,
          title: enteredTitle,
        })
        .then(({ data }) => {
          console.log(data);
          setEnteredTitle("");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <View style={styles.screen}>
      <Text
        style={{
          marginLeft: 120,
          marginTop: 100,
          fontFamily: "Montserrat-Bold",
        }}
      >
        Photos
      </Text>
      <View style={{ alignItems: "center", marginTop: 5 }}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => alert("Picker")}
        >
          <Ionicons name="add-outline" size={70} color={Colors.primaryColor} />
        </TouchableOpacity>
      </View>
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
        <TextInput
          style={styles.input}
          placeholder="Pâtisserie"
          onChangeText={(enteredTitle) => setEnteredTitle(enteredTitle)}
          value={enteredTitle}
        />
        <TouchableOpacity onPress={createNewCategory}>
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
    flexDirection: "column",
    justifyContent: "center",
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "75%",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#C7C7C7",
    padding: 8,
    marginTop: 10,
  },
});

export default AddCategory;

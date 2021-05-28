import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import api from "../api/api";
import * as ImagePicker from "expo-image-picker";

const AddCategory = ({ navigation }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [enteredTitle, setEnteredTitle] = useState("");

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

  // Title Control
  const createNewCategory = () => {
    if (enteredTitle === "") {
      return;
    } else {
      api
        .post("/categories", {
          imageUrl: imageUrl,
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
      {/* Image */}
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
        {imageUrl === null ? (
          <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
            <Ionicons
              name="add-outline"
              size={70}
              color={Colors.primaryColor}
            />
          </TouchableOpacity>
        ) : (
          <Image
            style={{ width: 150, height: 150 }}
            source={{ uri: imageUrl }}
          />
        )}
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
        <TextInput
          style={styles.input}
          placeholder="Pâtisserie"
          onChangeText={(enteredTitle) => setEnteredTitle(enteredTitle)}
          value={enteredTitle}
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
    flexDirection: "column",
    justifyContent: "center",
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 10,
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

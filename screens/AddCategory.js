import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import api from "../api/api";
import Input from "../components/Input";
import ImagePickerComponent from "../components/ImagePickerComponent";
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
          navigation.goBack();
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <View style={styles.screen}>
      {/* Image */}
      {imageUrl === null ? (
        <View>
          <ImagePickerComponent label="Photos" onPress={pickImage} />
        </View>
      ) : (
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ width: "90%", height: 150, borderRadius: 10 }}
            source={{ uri: imageUrl }}
          />
        </View>
      )}

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
          alignItems: "center",
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

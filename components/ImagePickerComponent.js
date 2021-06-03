import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import * as ImagePicker from "expo-image-picker";

const ImagePickerComponent = ({ label }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const { labelStyle, imageContainer, container } = styles;

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

  return (
    <>
      <View style={container}>
        {imageUrl === null ? (
          <View>
            <Text style={labelStyle}>{label}</Text>
            <TouchableOpacity style={imageContainer} onPress={pickImage}>
              <Ionicons
                name="add-outline"
                size={70}
                color={Colors.primaryColor}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <Image
            style={{ width: "90%", height: 200, borderRadius: 10 }}
            source={{ uri: imageUrl }}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontFamily: "Montserrat-Bold",
  },
  imageStyle: {
    width: 150,
    height: 150,
  },
  container: {
    alignItems: "center",
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
});

export default ImagePickerComponent;

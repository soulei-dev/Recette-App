import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import api from "../api/api";
import CategoryGrid from "../components/CategoryGrid";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const Categories = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    navigation.addListener("focus", async () => {
      api
        .get("/categories")
        .then(({ data }) => {
          data.filter((obj) => {
            console.log(obj);
            setData(data);
          });
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    });
  }, []);

  const renderGridItem = (itemData) => {
    return (
      <CategoryGrid
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        onSelect={() => {
          navigation.navigate("CategoryRecipes", {
            categoryId: itemData.item.id,
            data: data,
          });
        }}
      />
    );
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.addCategoryButton}
        onPress={() => navigation.navigate("AddCategory")}
      >
        <MaterialIcons
          name="add-circle-outline"
          size={42}
          color={Colors.primaryColor}
        />
      </TouchableOpacity>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          keyExtractor={(item, index) => item.id}
          data={data}
          renderItem={renderGridItem}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: 160 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addCategoryButton: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: "dashed",
    borderColor: Colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
});

export default Categories;

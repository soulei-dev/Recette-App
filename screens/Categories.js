import React from "react";
import { StyleSheet, FlatList, View, TouchableOpacity } from "react-native";
import { CATEGORIES } from "../data/fake-data";
import CategoryGrid from "../components/CategoryGrid";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const Categories = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGrid
        title={itemData.item.title}
        image={itemData.item.image}
        onSelect={() => {
          navigation.navigate("CategoryRecipes", {
            categoryId: itemData.item.id,
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

      <FlatList
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 160 }}
      />
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
    borderStyle: "dashed",
    borderColor: Colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
});

export default Categories;

import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      IconComponent={MaterialCommunityIcons}
      iconSize={30}
      color={Colors.primaryColor}
      {...props}
    />
  );
};

export default CustomHeaderButton;

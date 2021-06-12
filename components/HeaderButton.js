import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      IconComponent={AntDesign}
      iconSize={25}
      color={Colors.primaryColor}
      {...props}
    />
  );
};

export default CustomHeaderButton;

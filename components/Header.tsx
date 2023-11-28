import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import appColors from "../assets/styles/appColors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ParamListBase } from "@react-navigation/routers/src/types";
import { DrawerNavigationProp } from "@react-navigation/drawer";

type CustomHeaderProps = {
  navigation: DrawerNavigationProp<ParamListBase>;
};

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.textTile}>PGL-MAGD</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 45,
    backgroundColor: appColors.colorFondo,
    width: "100%",
    paddingVertical: 10,
    borderColor: "black",
    borderStyle: "solid",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textTile: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffff",
    textAlign: "center",
    textAlignVertical: "center",
  },
});

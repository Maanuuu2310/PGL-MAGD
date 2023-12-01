import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import CustomHeader from "./Header";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SettingsScreen from "../screens/PortfolioScreen";
import appColors from "../assets/styles/appColors";
import { RenderCardListContext } from "../context/RenderCardListContext";
import LogoutScreen from "../screens/LogoutScreen";

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
    headerStyle: {
      backgroundColor: appColors.colorFondo,
    },
    headerTintColor: appColors.colorTexto,
    drawerItemStyle: {
      width: "90%",
    },

    drawerStyle: {
      backgroundColor: appColors.colorBotones,
    },
    drawerActiveTintColor: appColors.colorTexto,
    drawerActiveBackgroundColor: appColors.colorActivo,
    drawerInactiveTintColor: "lightgray", // letras
    drawerInactiveBackgroundColor: appColors.colorInactivo, // los cuadros
    drawerType: "slide",
  };

  let { isListRendered } = useContext(RenderCardListContext);

  return isListRendered ? (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={drawerNavigatorScreenOptions}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  ) : (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={drawerNavigatorScreenOptions}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Drawer.Screen name="Portfolio" component={SettingsScreen} />
      <Drawer.Screen name="Cerrar Sesion" component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  headerContainer: {},
  headerTitle: {},
});

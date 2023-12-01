import { ScrollView, StyleSheet, Text, View, Image, _View } from "react-native";
import React, { useContext, useState } from "react";
import appColors from "../assets/styles/appColors";
import {
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import Description from "../components/Description";
import PortfolioComponent from "../components/PortfolioComponent";
import QrCompontent from "../components/QrCompontent";
import users from "../interfaces/users";
import { RenderCardListContext } from "../context/RenderCardListContext";

export default function App() {
  const Tab = createMaterialTopTabNavigator();
  const tabStyles: MaterialTopTabNavigationOptions = {
    tabBarInactiveTintColor: "lightgray",
    tabBarActiveTintColor: appColors.colorTexto,
    tabBarStyle: { backgroundColor: appColors.colorInactivo },
    tabBarIndicatorStyle: { backgroundColor: appColors.colorFondo },
  };

  let { userName } = useContext(RenderCardListContext);

  return userName === users[0].nombre ? (
    <Tab.Navigator initialRouteName={userName} screenOptions={tabStyles}>
      <Tab.Screen name="Portfolio" component={PortfolioComponent} />
      <Tab.Screen name="Qr" component={QrCompontent} />
    </Tab.Navigator>
  ) : (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>JESSE</Text>
      <Image
        source={require("../assets/jessi.png")}
        style={styles.image}
      ></Image>
      <Text style={styles.welcomeText2}>WE HAVE TO COOK</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: appColors.colorBotones,
  },

  welcomeText: {
    fontSize: 40,
    color: appColors.colorTexto,
    marginTop: "-20%",
  },

  welcomeText2: {
    fontSize: 40,
    color: appColors.colorTexto,
    marginTop: "-20%",
  },
  image: {
    width: 400,
    height: 400,
  },
});

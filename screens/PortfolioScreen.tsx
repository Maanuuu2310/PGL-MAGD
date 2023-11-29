import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import InfoContainer from "../components/InfoContainer";
import appColors from "../assets/styles/appColors";
import {
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import Description from "../components/Description";
import PortfolioComponent from "../components/PortfolioComponent";
import QrCompontent from "../components/QrCompontent";

export default function App() {
  const Tab = createMaterialTopTabNavigator();
  const tabStyles: MaterialTopTabNavigationOptions = {
    tabBarInactiveTintColor: "lightgray",
    tabBarActiveTintColor: appColors.colorTexto,
    tabBarStyle: { backgroundColor: appColors.colorInactivo },
    tabBarIndicatorStyle: { backgroundColor: appColors.colorFondo },
  };

  return (
    <Tab.Navigator screenOptions={tabStyles}>
      <Tab.Screen name="Portfolio" component={PortfolioComponent} />
      <Tab.Screen name="Qr" component={QrCompontent} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});

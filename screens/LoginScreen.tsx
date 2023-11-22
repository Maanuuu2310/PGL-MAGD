import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import appColors from "../assets/styles/appColors";

const LoginScreen = () => {
  return (
    <View>
      <Text style={styles.loginTextStyle}>Inicia Sesion</Text>
      <Text style={styles.loginMessageStyle}>Bienvenido</Text>
      <TextInput
        placeholder="Usuario"
        placeholderTextColor="white"
        style={styles.loginInputStyle}
      ></TextInput>
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="white"
        style={styles.loginInputStyle}
      ></TextInput>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginTextStyle: {
    fontSize: 40,
    color: appColors.primary,
  },
  loginMessageStyle: {
    fontSize: 20,
    color: appColors.primary,
  },

  loginInputStyle: {
    backgroundColor: appColors.primary,
    height: 40,
    width: "90%",
    opacity: 0.5,
    marginVertical: 10,
    fontWeight: "bold",
    paddingHorizontal: 15,
    fontSize: 15,
    color: "white",
  },
});

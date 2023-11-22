import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
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

      <Pressable
        accessibilityLabel="BotonLogin"
        //onPress={}
        style={styles.logInStyle}
      >
        <Text style={styles.logInTextStyle}>Log In</Text>
      </Pressable>
      <Text style={styles.passwordMessageStyle}>Olvide mi contraseña</Text>
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

  logInStyle: {
    backgroundColor: appColors.secondary,
    height: 45,
    width: "90%",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginVertical: 15,
  },

  logInTextStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  passwordMessageStyle: {
    fontSize: 16,
    color: appColors.primary,
    textAlign: "right",
    paddingHorizontal: 45,
    marginVertical: 10,
  },
});

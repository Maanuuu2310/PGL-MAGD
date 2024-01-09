import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useState } from "react";
import appColors from "../assets/styles/appColors";
import { RenderCardListContext } from "../context/RenderCardListContext";
import users from "../interfaces/users";

const RegisterScreen = () => {
  const [inputUser, setInputUser] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputMail, setInputMail] = useState("");
  let { toggleIsListRendered, setUserName } = useContext(RenderCardListContext);

  const handleChangeUser = (text: string) => {
    setInputUser(text);
  };

  const handleChangePassword = (text: string) => {
    setInputPassword(text);
  };

  const handleChangeMail = (text: string) => {
    setInputMail(text);
  };

  const handleRegister = () => {
    const users = {
      nombre: inputUser,
      mail: inputMail,
      password: inputPassword,
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginMessage}>Registrar Usuario</Text>
      <Text style={styles.welcomeMessage}>Bienvenido</Text>
      <TextInput
        placeholder="Usuario"
        placeholderTextColor="white"
        style={styles.loginInputStyle}
        onChangeText={handleChangeUser}
      ></TextInput>
      <TextInput
        placeholder="Mail"
        placeholderTextColor={appColors.colorTexto}
        style={styles.loginInputStyle}
        onChangeText={handleChangeMail}
      ></TextInput>
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor={appColors.colorTexto}
        style={styles.loginInputStyle}
        onChangeText={handleChangePassword}
      ></TextInput>

      <Pressable
        accessibilityLabel="BotonLogin"
        onPress={() => handleRegister()}
        style={styles.loginBotton}
      >
        <Text style={styles.logInTextStyle}>Register</Text>
      </Pressable>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  loginMessage: {
    fontSize: 40,
    color: appColors.colorTexto,
    marginTop: "-20%",
  },
  welcomeMessage: {
    fontSize: 20,
    color: appColors.colorTexto,
    margin: 10,
  },

  loginInputStyle: {
    borderColor: appColors.colorFondo,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 8,
    height: 40,
    width: "90%",
    opacity: 0.8,
    marginVertical: 10,
    fontWeight: "bold",
    paddingHorizontal: 15,
    fontSize: 15,
    color: appColors.colorTexto,
  },

  loginBotton: {
    backgroundColor: appColors.colorFondo,
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

  passwordMessage: {
    fontSize: 16,
    color: appColors.colorTexto,
    alignSelf: "flex-end",
    paddingHorizontal: 25,
    marginVertical: 10,
  },

  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: appColors.colorBotones,
  },
});

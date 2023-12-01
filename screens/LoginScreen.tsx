import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useState } from "react";
import appColors from "../assets/styles/appColors";
import { RenderCardListContext } from "../context/RenderCardListContext";
import RenderCardListProvider from "../providers/RenderCardListProvider";
import users from "../interfaces/users";

const LoginScreen = () => {
  const [inputUser, setInputUser] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  let { toggleIsListRendered, setUserName } = useContext(RenderCardListContext);

  const handleChangeUser = (text: string) => {
    setInputUser(text);
  };

  const handleChangePassword = (text: string) => {
    setInputPassword(text);
  };

  const handleLogin = () => {
    let usuarios = false;
    for (let index = 0; index < users.length; index++) {
      if (
        inputUser === users[index].nombre &&
        inputPassword === users[index].password
      ) {
        setUserName(inputUser);
        toggleIsListRendered();
        usuarios = true;
        alert("Inicio se sesion Correcto");
      }
    }
    if (usuarios === false) {
      alert("Inicio de sesion incorrecto");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginMessage}>Inicia Sesion</Text>
      <Text style={styles.welcomeMessage}>Bienvenido</Text>
      <TextInput
        placeholder="Usuario"
        placeholderTextColor="white"
        style={styles.loginInputStyle}
        onChangeText={handleChangeUser}
      ></TextInput>
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor={appColors.colorTexto}
        style={styles.loginInputStyle}
        onChangeText={handleChangePassword}
      ></TextInput>

      <Pressable
        accessibilityLabel="BotonLogin"
        onPress={() => handleLogin()}
        style={styles.loginBotton}
      >
        <Text style={styles.logInTextStyle}>Log In</Text>
      </Pressable>
      <Text style={styles.passwordMessage}>Olvide mi contraseña</Text>
    </View>
  );
};
export default LoginScreen;

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

// let user = {
//   nombre: "Manuel",
//   password: "2310",
// };
// if (inputUser == user.nombre && inputPassword == user.password) {
//   console.log("login correcto");
//   setUserName(inputUser);
//   toggleIsListRendered();
// } else {
//   console.log("login fallido");
//   console.log(inputUser, user.nombre, inputPassword, user.password);
// }

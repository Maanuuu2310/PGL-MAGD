import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import appColors from "../assets/styles/appColors";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenida</Text>
      <Image
        source={require("../assets/pepo.png")}
        style={styles.image}
      ></Image>
      <Pressable
        accessibilityLabel="BotonLogin"
        //onPress={}
        style={styles.boton}
      >
        <Text style={styles.loginText}>Entrar</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: appColors.colorBotones,
  },
  boton: {
    backgroundColor: appColors.colorFondo,
    color: "white",
    width: "50%",
    height: "9%",
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: "5%",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },

  loginText: {
    fontSize: 20,
    fontWeight: "bold",
    color: appColors.colorTexto,
  },

  welcomeText: {
    fontSize: 40,
    color: appColors.colorTexto,
    marginTop: "-20%",
  },

  image: {},
});

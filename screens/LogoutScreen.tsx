import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import appColors from "../assets/styles/appColors";
import { RenderCardListContext } from "../context/RenderCardListContext";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

const HomeScreen = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  let { toggleIsListRendered } = useContext(RenderCardListContext);

  const logout = () => {
    toggleIsListRendered(false);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Adios</Text>
      <Image
        source={require("../assets/troste.png")}
        style={styles.image}
      ></Image>
      <Pressable
        accessibilityLabel="BotonLogin"
        onPress={() => logout()}
        style={styles.boton}
      >
        <Text style={styles.loginText}>Cerrar Sesion</Text>
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

  usertext: {
    fontSize: 35,
    color: appColors.colorTexto,
  },

  image: {
    width: 300,
    height: 300,
  },
});

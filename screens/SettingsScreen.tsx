import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { useState } from "react";
import InfoContainer from "../components/InfoContainer";
import appColors from "../assets/styles/appColors";

export default function App() {
  const [displayMyQR] = useState(true);
  const [changeColor] = useState(false);

  return (
    <View style={changeColor ? styles.containerDark : styles.container}>
      <View></View>
      <View style={styles.infoContainer}>
        <InfoContainer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.colorBotones,
    alignItems: "center",
    justifyContent: "center",
  },
  containerDark: {
    alignItems: "center",
    justifyContent: "center",
  },
  bodyStyles: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
  infoContainer: {
    marginTop: 100,
  },
});

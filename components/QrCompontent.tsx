import { StyleSheet, View, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";
import appColors from "../assets/styles/appColors";

type QrProps = {
  changeColor: Boolean;
};

const QrCodes = () => {
  return (
    <View style={styles.bodyStyles}>
      <Text style={styles.text}>GitHub de Manu</Text>
      <QRCode
        value="https://github.com/Maanuuu2310"
        color={appColors.colorFondo}
        backgroundColor={appColors.colorBotones}
      />
    </View>
  );
};

export default QrCodes;

const styles = StyleSheet.create({
  bodyStyles: {
    width: "100%",
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
    backgroundColor: appColors.colorBotones,
  },
  text: {
    fontWeight: "bold",
    color: appColors.colorTexto,
    marginTop: -95,
    fontSize: 20,
    marginBottom: 5,
  },
});

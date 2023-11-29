import { StyleSheet, Text, View, ScrollView } from "react-native";
import appColors from "../assets/styles/appColors";

const HobbiesList = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleStyle}>cosas que me gustan mucho:</Text>
        <ScrollView style={styles.scrollviewStyle}>
          <Text style={styles.hobbiesStyle}>Ir al cine</Text>
          <Text style={styles.hobbiesStyle}>Ver series</Text>
          <Text style={styles.hobbiesStyle}>Ver F1</Text>
          <Text style={styles.hobbiesStyle}>Viajar</Text>
          <Text style={styles.hobbiesStyle}>Escuchar Música</Text>
          <Text style={styles.hobbiesStyle}>Ver documentales</Text>
          <Text style={styles.hobbiesStyle}>Ducharme</Text>
          <Text style={styles.hobbiesStyle}>
            Videojuegos en especial el Papers Please
          </Text>
          <Text style={styles.hobbiesStyle}>
            Me gusta por si no lo dije el papers please
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default HobbiesList;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  hobbiesStyle: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: appColors.colorInactivo,
    color: appColors.colorTexto,
  },
  titleStyle: {
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
    color: appColors.colorTexto,
  },
  titleDark: {},
  scrollviewStyle: {
    padding: 10,
  },
});

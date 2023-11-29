import { StyleSheet, Text, View, Image } from "react-native";
import appColors from "../assets/styles/appColors";

const Description = () => {
  return (
    <View>
      <View style={styles.descriptionStyle}>
        <Image
          style={styles.avatar}
          source={require("../assets/messichikito.jpg")}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Descripción sobre Manu</Text>
          <Text style={styles.textStyle}>
            Soy Manu me gusta el cine, la formula 1, la edición de videos y
            jugar videojuegos y en especial el papers please
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  titleStyle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  textStyle: {
    color: appColors.colorTexto,
  },

  descriptionStyle: {
    flexDirection: "row",
    alignItems: "center",
  },

  descriptionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: appColors.colorTexto,
    marginBottom: 4,
  },
  descriptionContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
});

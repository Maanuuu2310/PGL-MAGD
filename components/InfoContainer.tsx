import { StyleSheet, View } from "react-native";
import Description from "../components/Description";
import HobbiesList from "../components/HobbiesList";

const InfoContainer = () => {
  return (
    <View>
      <View />
      <View>
        <View style={styles.bodyStyles}>
          <Description />
        </View>
        <HobbiesList />
      </View>
    </View>
  );
};

export default InfoContainer;

const styles = StyleSheet.create({
  bodyStyles: {
    width: "100%",
    alignSelf: "center",
  },
});

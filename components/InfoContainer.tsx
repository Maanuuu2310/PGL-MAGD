import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Description from "../components/Description";
import HobbiesList from "../components/HobbiesList";
import appColors from "../assets/styles/appColors";

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

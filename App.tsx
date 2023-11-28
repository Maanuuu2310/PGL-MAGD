import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import RenderCardListProvider from "./providers/RenderCardListProvider";

export default function App() {
  return (
    <View style={styles.container}>
      <RenderCardListProvider>
        <Header></Header>
        <NavigationContainer>
          <Drawer></Drawer>
        </NavigationContainer>
        <StatusBar style="auto" />
      </RenderCardListProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

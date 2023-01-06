import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
// import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Code } from "./components/code";
import { Description } from "./components/description";
import { Number } from "./components/number";
import { PressedCode } from "./components/pressed-code";

export default function App() {
  // const [code, setCode] = useState("0000");

  return (
    <View style={styles.container}>
      <Description>Please enter the code below</Description>
      <View style={styles.code}>
        <Code />
        <PressedCode code="0000" />
      </View>
      <View style={styles.numberContainer}>
        <Number number="0" />
        <Number number="1" />
        <Number number="2" />
        <Number number="3" />
        <Number number="4" />
        <Number number="5" />
        <Number number="6" />
        <Number number="7" />
        <Number number="8" />
        <Number number="9" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#13111a",
    alignItems: "center",
    justifyContent: "center",
  },
  numberContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
  code: {
    flexDirection: "row",
    marginBottom: 20,
  },
});

registerRootComponent(App);

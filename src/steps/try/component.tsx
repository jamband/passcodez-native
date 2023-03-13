import { StyleSheet, View } from "react-native";
import { PasscodeButton } from "~/components/passcode/button";
import { PasscodeDescription } from "~/components/passcode/description";
import { PressedCode } from "~/components/pressed-code";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <View style={styles.container}>
    <PasscodeDescription text="Enter passcode" />
    <PressedCode pressedCode={props.pressedCode.state} />
    <View style={styles.buttons}>
      {props.numbers.map((number) => (
        <PasscodeButton
          key={number}
          number={number}
          onPress={() => props.pressedCode.set(number)}
        />
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 20,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    justifyContent: "center",
    marginTop: 30,
    width: 375,
  },
});

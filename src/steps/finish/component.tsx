import { StyleSheet, View } from "react-native";
import { Button } from "~/components/button";
import { Passcode } from "~/components/passcode";
import { PasscodeDescription } from "~/components/passcode/description";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <View style={styles.container}>
    <View style={styles.passcodeContainer}>
      <PasscodeDescription text="Passcode" />
      <Passcode passcode={props.passcode.state} />
    </View>
    <View style={styles.passcodeContainer}>
      <PasscodeDescription text="Entered Passcode" />
      <Passcode passcode={props.pressedCode.state} />
    </View>
    <View style={styles.buttons}>
      <Button
        onPress={props.toTry}
        disabled={props.passcode.state === props.pressedCode.state}
        text="Retry"
      />
      <Button onPress={props.toFirst} text="Next" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    gap: 40,
  },
  passcodeContainer: {
    alignItems: "center",
    gap: 10,
  },
  buttons: {
    flexDirection: "row",
    gap: 25,
    marginTop: 50,
  },
});

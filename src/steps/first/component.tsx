import { StyleSheet, View } from "react-native";
import { Button } from "~/components/button";
import { Passcode } from "~/components/passcode";
import { PasscodeDescription } from "~/components/passcode/description";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <View style={styles.container}>
    <PasscodeDescription text="Remember passcode" />
    <Passcode passcode={props.passcode.state} />
    <Button style={styles.okButton} onPress={props.toTry} text="OK" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 10,
  },
  okButton: {
    alignItems: "center",
    marginTop: 50,
    width: 220,
  },
});

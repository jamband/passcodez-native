import { StyleSheet } from "react-native";
import { Button } from "~/components/button";
import { Passcode } from "~/components/passcode";
import { PasscodeDescription } from "~/components/passcode/description";
import { Spacer } from "~/components/spacer";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    <Spacer size={15}>
      <PasscodeDescription text="Remember passcode" />
    </Spacer>
    <Spacer size={50}>
      <Passcode passcode={props.passcode.state} />
    </Spacer>
    <Button style={styles.okButton} onPress={props.toTry} text="OK" />
  </>
);

const styles = StyleSheet.create({
  okButton: {
    alignItems: "center",
    width: 220,
  },
});

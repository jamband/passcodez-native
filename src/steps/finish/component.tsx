import { StyleSheet, View } from "react-native";
import { Button } from "~/components/button";
import { Passcode } from "~/components/passcode";
import { PasscodeDescription } from "~/components/passcode/description";
import { Spacer } from "~/components/spacer";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    <Spacer size={15}>
      <PasscodeDescription text="Passcode" />
    </Spacer>
    <Spacer size={40}>
      <Passcode passcode={props.passcode.state} />
    </Spacer>
    <Spacer size={15}>
      <PasscodeDescription text="Entered Passcode" />
    </Spacer>
    <Spacer size={70}>
      <Passcode passcode={props.pressedCode.state} />
    </Spacer>
    <View style={styles.buttons}>
      <Button
        onPress={props.toTry}
        disabled={props.passcode.state === props.pressedCode.state}
        style={styles.retryButton}
        text="Retry"
      />
      <Button onPress={props.toFirst} text="Next" />
    </View>
  </>
);

const styles = StyleSheet.create({
  buttons: {
    display: "flex",
    flexDirection: "row",
  },
  retryButton: {
    marginRight: 25,
  },
});

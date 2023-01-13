import { StyleSheet, View } from "react-native";
import { PasscodeButton } from "~/components/passcode/button";
import { PasscodeDescription } from "~/components/passcode/description";
import { PressedCode } from "~/components/pressed-code";
import { Spacer } from "~/components/spacer";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    <Spacer size={30}>
      <PasscodeDescription text="Enter passcode" />
    </Spacer>
    <Spacer size={30}>
      <PressedCode pressedCode={props.pressedCode.state} />
    </Spacer>
    <View style={styles.buttons}>
      {props.numbers.map((number) => (
        <PasscodeButton
          key={number}
          number={number}
          onPress={() => props.pressedCode.set(number)}
        />
      ))}
    </View>
  </>
);

const styles = StyleSheet.create({
  buttons: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: 10,
    width: 375,
  },
});

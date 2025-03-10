import { StyleSheet, View } from "react-native";
import { PASSCODE_LENGTH } from "~/constants";
import { state50, state500, state600 } from "~/styles/color";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <View style={styles.container}>
    {[...Array(PASSCODE_LENGTH)].map((_, index) => (
      <View
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        key={index}
        style={[
          styles.number,
          index >= props.pressedCode.length
            ? styles.notPressed
            : styles.pressed,
        ]}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
  },
  number: {
    backgroundColor: "white",
    borderRadius: 9999,
    height: 20,
    width: 20,
  },
  pressed: {
    backgroundColor: `rgb(${state600})`,
    borderColor: `rgb(${state600})`,
    borderWidth: 2,
  },
  notPressed: {
    backgroundColor: `rgb(${state50})`,
    borderColor: `rgb(${state500})`,
    borderWidth: 2,
  },
});

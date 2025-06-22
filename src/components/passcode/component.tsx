import { StyleSheet, Text, View } from "react-native";
import { PASSCODE_LENGTH } from "~/constants";
import { state600 } from "~/styles/color";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <View style={styles.container}>
    {[...Array(PASSCODE_LENGTH)].map((_, index) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: reason
      <Text key={index} style={styles.number}>
        {props.passcode[index]}
      </Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
  },
  number: {
    color: `rgb(${state600})`,
    fontSize: 40,
    fontVariant: ["tabular-nums"],
    fontWeight: "bold",
  },
});

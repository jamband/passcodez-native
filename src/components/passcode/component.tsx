import { StyleSheet, Text, View } from "react-native";
import { PASSCODE_LENGTH } from "~/constants";
import { state600 } from "~/styles/color";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <View style={styles.container}>
    {[...Array(PASSCODE_LENGTH)].map((_, index) => (
      <View key={index} style={styles.passcode}>
        <Text style={styles.number}>{props.passcode[index]}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  passcode: {
    marginHorizontal: 5,
  },
  number: {
    color: `rgb(${state600})`,
    fontSize: 40,
    fontVariant: ["tabular-nums"],
    fontWeight: "bold",
  },
});

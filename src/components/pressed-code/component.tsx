import { StyleSheet, Text } from "react-native";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <Text style={styles.code}>{props.code}</Text>
);

const styles = StyleSheet.create({
  code: {
    color: "#eceff4",
    fontSize: 60,
    fontVariant: ["tabular-nums"],
  },
});

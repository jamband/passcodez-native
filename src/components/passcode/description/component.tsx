import { StyleSheet, Text } from "react-native";
import { state600 } from "~/styles/color";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <Text style={styles.text}>{props.text}</Text>
);

const styles = StyleSheet.create({
  text: {
    color: `rgb(${state600})`,
    fontSize: 22,
    fontWeight: "bold",
  },
});

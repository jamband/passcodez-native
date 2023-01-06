import { StyleSheet, Text } from "react-native";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <Text style={styles.description}>{props.children}</Text>
);

const styles = StyleSheet.create({
  description: {
    color: "#b7b4c7",
    fontSize: 20,
    marginBottom: 28,
  },
});

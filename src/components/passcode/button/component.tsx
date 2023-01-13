import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { sky50, sky500 } from "~/styles/color";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.text}>{props.number}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: `rgb(${sky500})`,
    borderRadius: 9999,
    display: "flex",
    height: 80,
    justifyContent: "center",
    margin: 10,
    width: 80,
  },
  text: {
    color: `rgb(${sky50})`,
    fontSize: 30,
    fontVariant: ["tabular-nums"],
    fontWeight: "bold",
  },
});

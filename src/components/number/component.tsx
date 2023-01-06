import { Pressable, StyleSheet, Text } from "react-native";
import type { _Props } from "./type";

export const Component: React.FC<_Props> = (props) => (
  <Pressable style={styles.button} onPress={props.onPress}>
    <Text style={styles.text}>{props.number}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 9999,
    elevation: 3,
    backgroundColor: "#f7d68e",
    marginVertical: 12,
    marginHorizontal: 12,
  },
  text: {
    color: "#13111a",
    fontSize: 30,
    fontWeight: "bold",
  },
});

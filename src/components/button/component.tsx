import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { sky50, sky300, sky500, sky600 } from "~/styles/color";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <TouchableOpacity
    style={[
      styles.button,
      props.disabled && styles.buttonDisabled,
      props.style,
    ]}
    disabled={props.disabled}
    onPress={props.onPress}
  >
    <Text style={[styles.text, props.disabled && styles.textDisabled]}>
      {props.text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: `rgb(${sky500})`,
    borderRadius: 12,
    paddingHorizontal: 25,
    paddingVertical: 15,
    shadowColor: `rgb(${sky600})`,
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 2,
    shadowRadius: 0,
  },
  buttonDisabled: {
    backgroundColor: `rgb(${sky300})`,
    shadowColor: `rgba(${sky600}, 0.5)`,
  },
  text: {
    color: `rgb(${sky50})`,
    fontSize: 20,
    fontWeight: "bold",
  },
  textDisabled: {
    color: `rgba(${sky50}, 0.5)`,
  },
});

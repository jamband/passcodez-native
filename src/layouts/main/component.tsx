import { StyleSheet, View } from "react-native";
import { state50 } from "~/styles/color";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <View style={styles.container}>{props.children}</View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: `rgb(${state50})`,
    flex: 9,
    justifyContent: "center",
    padding: 20,
  },
});

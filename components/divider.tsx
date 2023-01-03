import { StyleSheet, View } from "react-native";

export const Divider: React.FC = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    alignSelf: "center",
    width: "60%",
    borderBottomColor: "#5a5665",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

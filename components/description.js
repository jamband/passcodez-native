import { Text, StyleSheet } from "react-native";

export const Description = ({ children }) => {
  return <Text style={styles.description}>{children}</Text>;
};

const styles = StyleSheet.create({
  description: {
    color: "#b7b4c7",
    fontSize: 20,
  },
});

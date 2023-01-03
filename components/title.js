import { Text, StyleSheet } from "react-native";

export const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: "#eceff4",
    fontSize: 40,
    fontWeight: "bold",
  },
});

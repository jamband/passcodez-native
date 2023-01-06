import { StyleSheet, Text } from "react-native";

type Props = {
  children: React.ReactNode;
};

export const Title: React.FC<Props> = (props) => {
  return <Text style={styles.title}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: "#eceff4",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 2,
  },
});

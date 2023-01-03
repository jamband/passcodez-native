import { StyleSheet, Text } from "react-native";

type Props = {
  children: React.ReactNode;
};

export const Description: React.FC<Props> = (props) => {
  return <Text style={styles.description}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  description: {
    color: "#b7b4c7",
    fontSize: 20,
  },
});

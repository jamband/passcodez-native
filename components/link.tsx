import { useCallback } from "react";
import { Alert, Linking, StyleSheet, Text } from "react-native";

type Props = {
  url: string;
  children: React.ReactNode;
};

export const Link: React.FC<Props> = (props) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(props.url);

    if (supported) {
      await Linking.openURL(props.url);
    } else {
      Alert.alert(`この URL は開くことができません: ${props.url}`);
    }
  }, [props.url]);

  return (
    <Text style={styles.link} onPress={handlePress}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "#94c1f2",
    fontSize: 24,
  },
});

import { useCallback } from "react";
import { StyleSheet, Alert, Linking, Text, View } from "react-native";

export const Link = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`この URL は開くことができません: ${url}`);
    }
  }, [url]);

  return (
    <View style={styles.container}>
      <Text style={styles.link} onPress={handlePress}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "#94c1f2",
    fontSize: 24,
  },
});

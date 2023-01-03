import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Description } from "./components/description";
import { Divider } from "./components/divider";
import { Link } from "./components/link";
import { Title } from "./components/title";

export default function App() {
  return (
    <View style={styles.container}>
      <Title>tomoki morita</Title>
      <Description>web developer</Description>
      <Link url="https://jamband.github.io/about/">about me</Link>
      <Link url="https://jamband.github.io/blog/">blog</Link>
      <Link url="https://github.com/jamband">github</Link>
      <Link url="https://zenn.dev/jamband">zenn</Link>
      <Divider />
      <Link url="https://plusarchive.com">plusarchive</Link>
      <Link url="https://jamband.github.io/tapes/">tapes</Link>
      <Link url="https://jamband.github.io/denene/">denene</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#13111a",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1.4,
  },
});

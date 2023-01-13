import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { sky100, sky500, sky600 } from "~/styles/color";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.scoreContainer}>
      Score <Text style={styles.score}>{props.score}</Text>
    </Text>
    <TouchableOpacity
      style={styles.resetScoreButton}
      onPress={props.resetScore}
    >
      <Text style={styles.resetScoreButtonText}>Reset Score</Text>
    </TouchableOpacity>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: `rgb(${sky600})`,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  scoreContainer: {
    color: `rgb(${sky100})`,
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 30,
  },
  score: {
    fontVariant: ["tabular-nums"],
  },
  resetScoreButton: {
    backgroundColor: `rgb(${sky500})`,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  resetScoreButtonText: {
    color: `rgb(${sky100})`,
    fontSize: 20,
    fontWeight: "bold",
  },
});

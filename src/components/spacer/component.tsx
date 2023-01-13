import { View } from "react-native";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <View style={{ marginBottom: props.size }}>{props.children}</View>
);

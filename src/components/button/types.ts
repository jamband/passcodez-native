import type { StyleProp, TextStyle } from "react-native";

export type Props = {
  disabled?: boolean;
  style?: StyleProp<TextStyle>;
  onPress: () => void;
  text: string;
};

export type _Props = Props & {
  //
};

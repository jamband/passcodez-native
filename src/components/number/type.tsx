export type Props = {
  number: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
};

export type _Props = Props & {
  onPress: () => void;
};

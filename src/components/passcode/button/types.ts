import type { PASSCODE_ALLOW_NUMBERS } from "~/constants";

export type Props = {
  number: (typeof PASSCODE_ALLOW_NUMBERS)[number];
  onPress: () => void;
};

export type _Props = Props & {
  //
};

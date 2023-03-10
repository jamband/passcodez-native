import { Component } from "./component";
import type { Props } from "./types";

export const Main: React.FC<Props> = (props) => {
  return <Component {...props} />;
};

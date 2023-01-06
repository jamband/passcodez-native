import { Component } from "./component";
import type { Props } from "./types";

export const Code: React.FC<Props> = (props) => {
  const code = "1234";

  return <Component {...props} code={code} />;
};

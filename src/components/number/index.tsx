import type React from "react";
import { Component } from "./component";
import type { Props } from "./type";

export const Number: React.FC<Props> = (props) => {
  const onPress = () => {
    console.log("press...");
  };

  return <Component {...props} onPress={onPress} />;
};

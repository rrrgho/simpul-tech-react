import React from "react";
import { Wrapper } from "./button.style";
import { IButton } from "./button.type";

const Button = (props: IButton) => {
  const { title, ...rest } = props;
  return (
    <Wrapper {...rest}>
      <span>{title}</span>
    </Wrapper>
  );
};

export default Button;

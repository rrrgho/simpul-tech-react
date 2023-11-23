import React from "react";
import { Content, Shadow, Wrapper } from "./button-bubble.style";
import { IButtonBubble } from "./button-bubble.type";
import Bag from "../../assets/icons/bag.svg";

const ButtonBubble = (props: IButtonBubble) => {
  const { background, icon, isOpen, onClick } = props;
  return (
    <Wrapper>
      <Shadow />
      <Content background={background} isOpen={isOpen} onClick={onClick}>
        <img src={icon ?? Bag} alt="Icon" />
      </Content>
    </Wrapper>
  );
};
export default ButtonBubble;

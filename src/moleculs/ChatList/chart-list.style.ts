import styled from "styled-components";
import { Theme } from "../../global.theme";

export const Wrapper = styled.div`
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-color: #ccc;
  margin-top: 24px;
`;

export const ChatTitle = styled.h6`
  color: ${Theme.color.blue};
  font-weight: bold;
  margin: 0;
  margin-bottom: 5px;
`;

export const BubbleGroupWrapper = styled.div`
  position: relative;
  width: 34px;
  height: 34px;
  margin-top: 3px;
`;

export const ContentBubbleGroup = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100px;
  background: ${Theme.color.blue};
  line-height: 32px;
  text-align: center;
  z-index: 9;
  position: absolute;
  left: 16px;
  cursor: pointer;
`;

export const Shadow = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  line-height: 34px;
  text-align: center;
  background: #666;
  opacity: 0.5;
  border-radius: 100px;
  z-index: 8;
`;

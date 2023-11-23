import styled from "styled-components";
import { Theme } from "../../global.theme";

interface IWrapper {
  background?: string;
  isOpen?: boolean;
}

export const Wrapper = styled.div`
  position: relative;
  width: 68px;
  height: 68px;
`;

export const Content = styled.div<IWrapper>`
  width: 100%;
  height: 100%;
  border-radius: 100px;
  background: ${(props) => props.background ?? Theme.color.blue};
  line-height: 65px;
  text-align: center;
  z-index: 9;
  position: absolute;
  left: ${(props) => (props.isOpen ? "10px" : 0)};
  cursor: pointer;
`;

export const Shadow = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: ${Theme.color.grey};
  opacity: 0.5;
  border-radius: 100px;
  z-index: 8;
`;

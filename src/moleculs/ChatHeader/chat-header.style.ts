import styled from "styled-components";
import { Theme } from "../../global.theme";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-color: #ccc;
`;

export const ChatTitle = styled.h5`
  color: ${Theme.color.blue};
  font-weight: bold;
  margin: 0;
`;

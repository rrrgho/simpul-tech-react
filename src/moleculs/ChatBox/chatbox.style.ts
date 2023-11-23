import styled from "styled-components";
import { Theme } from "../../global.theme";

export const Wrapper = styled.div`
  height: 85%;
  background: #fff;
  margin-top: 60px;
  overflow: hidden;
  overflow-y: scroll;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const ChatCard = styled.div`
  background: ${(props) => props.color ?? Theme.color.chats.yellow};
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
`;

export const AccountName = styled.span`
  color: ${Theme.color.indicator.yellow};
  font-weight: bold;
`;

export const ChatText = styled.span`
  color: ${Theme.color.grey};
  font-weight: 500;
`;

export const ChatTextTime = styled.span`
  color: ${Theme.color.grey};
  font-weight: 400;
  font-size: 14px;
`;

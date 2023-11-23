import React from "react";
import {
  AccountName,
  ChatCard,
  ChatText,
  ChatTextTime,
  Wrapper,
} from "./chatbox.style";
import { IMessage } from "../../global.type";
import { IAuthenticated } from "../../Types/initial.type";
import { useSelector } from "react-redux";
import { IRootState } from "../../Store";
import { Theme } from "../../global.theme";

interface IChatBox {
  messages: Array<IMessage>;
}

const ChatBox = (props: IChatBox) => {
  const { messages } = props;
  const Identity: IAuthenticated = useSelector(
    (state: IRootState) => state.InitialReducer
  );
  return (
    <Wrapper>
      {messages &&
        messages.map((item: IMessage) => {
          if (item.user_id === Identity.user_id) {
            return (
              <div key={item.id} className="row justify-content-end mt-3">
                <div className="col-10">
                  <div className="row text-end">
                    <AccountName>You</AccountName>
                  </div>
                  <ChatCard color={Theme.color.chats.purple}>
                    <ChatText>{item.message}</ChatText> <br />
                    <ChatTextTime>19:50</ChatTextTime>
                  </ChatCard>
                </div>
              </div>
            );
          } else {
            return (
              <div key={item.id} className="row mt-3">
                <div className="col-10">
                  <AccountName>{item.name}</AccountName>
                  <ChatCard>
                    <ChatText>{item.message}</ChatText> <br />
                    <ChatTextTime>19:50</ChatTextTime>
                  </ChatCard>
                </div>
              </div>
            );
          }
        })}
    </Wrapper>
  );
};

export default ChatBox;

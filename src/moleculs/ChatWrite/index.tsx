import React, { useState } from "react";
import { Wrapper } from "./chat-write.style";
import Textfield from "../../components/Textfield";
import Button from "../../components/Button";
import { Theme } from "../../global.theme";
import { useDispatch, useSelector } from "react-redux";
import { SET_APPEND_CHATROOM, SET_CHATROOM } from "../../Store/action";
import { IChat } from "../../global.type";
import { IAuthenticated } from "../../Types/initial.type";
import { IRootState } from "../../Store";
import { useChatWrite } from "./useChatWrite";

interface Props {
  chat: IChat | any;
}

const ChatWrite = ({ chat }: Props) => {
  const [message, setMessage] = useState<string>("");
  const { sendMessage } = useChatWrite();
  const dispatch = useDispatch();
  const Identity: IAuthenticated = useSelector(
    (state: IRootState) => state.InitialReducer
  );
  const messages = useSelector((state: IRootState) => state.ChatRoomReducer);

  const handleSubmit = () => {
    const newMessage = {
      group_id: chat.id,
      user_id: Identity.user_id,
      message,
    };
    sendMessage.mutate(newMessage);
    dispatch(SET_CHATROOM([...messages.data, newMessage]));
    setMessage("");
  };
  return (
    <Wrapper>
      <div className="row">
        <div className="col-10">
          <Textfield
            onChange={(e: any) => {
              setMessage(e.target.value);
            }}
            value={message}
          />
        </div>
        <div className="col-2">
          <Button
            title="Send"
            style={{
              height: 55,
              width: 100,
              background: Theme.color.blue,
              fontWeight: "bold",
            }}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default ChatWrite;

import { useSelector } from "react-redux";
import { IChat } from "../../global.type";
import ChatBox from "../../moleculs/ChatBox";
import ChatHeader from "../../moleculs/ChatHeader";
import ChatWrite from "../../moleculs/ChatWrite";
import { useChatRoom } from "./useChatRoom";
import { IRootState } from "../../Store";
import { useEffect } from "react";

interface Props {
  chat: IChat | undefined;
  handleBack: () => void;
}

const ChatRoom = (props: Props) => {
  const { chat, handleBack } = props;
  const { chatroom } = useChatRoom(chat?.id);
  const chats = useSelector((state: IRootState) => state.ChatRoomReducer);

  useEffect(() => {
    console.log("CHAT REDUCERS: ", chats.data);
  }, [chatroom]);
  return (
    <>
      <ChatHeader handleBack={handleBack} chat={chat} />
      <ChatBox messages={chats.data} />
      <ChatWrite chat={chat} />
    </>
  );
};

export default ChatRoom;

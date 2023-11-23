import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Chat from "../../assets/icons/chat.svg";
import Task from "../../assets/icons/task.svg";
import Thunder from "../../assets/icons/thunder.svg";
import Button from "../../components/Button";
import ButtonBubble from "../../components/ButtonBubble";
import Chats from "../../organisms/Chats";
import { BubbleFooter, Content, PopContainer, Wrapper } from "./cover.style";
import { IChat } from "../../global.type";
import ChatRoom from "../../organisms/ChatRoom";
import { SET_CHATROOM } from "../../Store/action";

interface IChatRoomRender {
  open: boolean;
  chat: IChat | undefined;
}

const Cover: FC = () => {
  const [bubbleExpand, setBubbleExpand] = useState<boolean>(false);
  const [chatRoom, setChatRoom] = useState<IChatRoomRender>({
    open: false,
    chat: undefined,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBubleExpand = () => {
    setBubbleExpand(!bubbleExpand);
  };
  const handleLogout = () => {
    dispatch({ type: "RESET" });
    navigate("/login");
  };

  const handleClickChat = (chat: IChat) => {
    setChatRoom((prev: IChatRoomRender) => ({
      ...prev,
      open: true,
      chat,
    }));
  };

  const handleBackChatRoom = () => {
    dispatch(SET_CHATROOM([]));
    setChatRoom({ open: false, chat: undefined });
  };
  return (
    <Wrapper>
      <Content>
        <Button
          title="Logout Here"
          className="bg-danger p-3 m-2"
          onClick={handleLogout}
        />
        <PopContainer>
          {chatRoom.open ? (
            <ChatRoom handleBack={handleBackChatRoom} chat={chatRoom.chat} />
          ) : (
            <Chats onClick={handleClickChat} />
          )}
        </PopContainer>
        <BubbleFooter>
          {bubbleExpand && (
            <>
              <div className="p-3 text-center">
                <ButtonBubble icon={Task} background="#fff" />
              </div>
              <div className="p-3 text-center">
                <ButtonBubble icon={Chat} background="#fff" />
              </div>
            </>
          )}
          <div className="p-3">
            <ButtonBubble onClick={handleBubleExpand} icon={Thunder} />
          </div>
        </BubbleFooter>
      </Content>
    </Wrapper>
  );
};

export default Cover;

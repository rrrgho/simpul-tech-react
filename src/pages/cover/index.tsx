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
import Tools from "../../assets/images/tools.png";

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
  const [isPopUpChat, setIsPopUpChat] = useState<boolean>(false);
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
        <div className="row">
          <div className="col-3">
            <div className="card">
              <img
                className="image-fluid"
                width="400"
                src={Tools}
                alt="tools"
              />
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-header">
                <h2>You can even do Live Chat here</h2>
              </div>
              <div className="card-body">
                <h5>
                  Try to login with different account with different browser
                </h5>
                <p>Use this account</p>
                <ul>
                  <li>riangho@gmail.com | admin</li>
                  <li>billgates@gmail.com | admin</li>
                  <li>jackma@gmail.com | admin</li>
                </ul>

                <p>
                  Or you can see the Seeder data in the Laravel file at <br />
                  <b>/database/seeder/UserSeeder</b>
                </p>
              </div>
            </div>
          </div>
        </div>

        {isPopUpChat && (
          <PopContainer>
            {chatRoom.open ? (
              <ChatRoom handleBack={handleBackChatRoom} chat={chatRoom.chat} />
            ) : (
              <Chats onClick={handleClickChat} />
            )}
          </PopContainer>
        )}
        <BubbleFooter>
          {bubbleExpand && (
            <>
              <div className="p-3 text-center">
                <ButtonBubble icon={Task} background="#fff" />
              </div>
              <div className="p-3 text-center">
                <ButtonBubble
                  icon={Chat}
                  onClick={() => {
                    setIsPopUpChat(!isPopUpChat);
                  }}
                  background="#fff"
                />
              </div>
            </>
          )}
          {!isPopUpChat && (
            <div className="p-3">
              <ButtonBubble onClick={handleBubleExpand} icon={Thunder} />
            </div>
          )}
        </BubbleFooter>
      </Content>
    </Wrapper>
  );
};

export default Cover;

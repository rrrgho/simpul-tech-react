import React from "react";
import { ChatTitle, Wrapper } from "./chat-header.style";
import ChevronLeft from "../../assets/icons/chevron-left.svg";
import Close from "../../assets/icons/close.svg";
import { IChat } from "../../global.type";

interface Props {
  chat: IChat | undefined;
  handleBack: () => void;
}

const ChatHeader = ({ chat, handleBack }: Props) => {
  return (
    <Wrapper>
      <div className="row p-3">
        <div
          className="col-1"
          style={{ cursor: "pointer" }}
          onClick={handleBack}
        >
          <img src={ChevronLeft} alt="Arrow Back" className="mt-3" />
        </div>
        <div className="col-10">
          <ChatTitle>{chat?.name}</ChatTitle>
          <span>{chat?.members.length} Participants</span>
        </div>
        <div className="col-1">
          <img src={Close} alt="Arror Back" />
        </div>
      </div>
    </Wrapper>
  );
};

export default ChatHeader;

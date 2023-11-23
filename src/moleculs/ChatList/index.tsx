import React from "react";
import {
  BubbleGroupWrapper,
  ChatTitle,
  ContentBubbleGroup,
  Shadow,
  Wrapper,
} from "./chart-list.style";
import Person from "../../assets/icons/person.svg";
import { IChat } from "../../global.type";
import Skeleton from "react-loading-skeleton";

interface IChatList {
  data: Array<IChat>;
  isLoading: boolean;
  onClick: any;
}

const ChatListLoading = () => {
  return (
    <>
      {new Array(5).fill("").map(() => {
        return (
          <div className="mt-4">
            <Skeleton width={"30%"} height={30} />
            <Skeleton width={"10%"} height={20} />
            <Skeleton width={"90%"} />
            <Skeleton width={"80%"} />
          </div>
        );
      })}
    </>
  );
};

const ChatList = (props: IChatList) => {
  const { data, isLoading, onClick } = props;
  return (
    <>
      {isLoading ? (
        <ChatListLoading />
      ) : (
        <>
          {data.map((item: IChat) => {
            return (
              <Wrapper
                onClick={() => {
                  onClick(item);
                }}
              >
                <div key={item.id} className="row">
                  <div className="col-1">
                    <BubbleGroupWrapper>
                      <Shadow>
                        <img src={Person} alt="Person" style={{ width: 20 }} />
                      </Shadow>
                      <ContentBubbleGroup>
                        <img src={Person} alt="Person" style={{ width: 20 }} />
                      </ContentBubbleGroup>
                    </BubbleGroupWrapper>
                  </div>
                  <div className="col-8 ps-4">
                    <ChatTitle>{item.name}</ChatTitle>{" "}
                    <h6 className="m-0">Rian Gho : </h6>
                    <p>We should use Redux-Persist to store auth!</p>
                  </div>
                  <div className="col-3 text-end">
                    <span>02/06/2021 10:45</span>
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </>
      )}
    </>
  );
};

export default ChatList;

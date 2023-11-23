import { IMessage } from "../../global.type";
import { ActionType } from "../action.type";

const data: Array<IMessage> = [];

export const ChatRoomReducer = (state: Array<IMessage> = data, action: any) => {
  if (action.type === ActionType.SET_CHATROOM) {
    console.log("CURRENT SET: ", state);
    return {
      ...state,
      data: action.payload,
    };
  }
  if (action.type === ActionType.APPEND_CHATROOM) {
    console.log("CURRENT: ", state);
    return {
      ...state,
      data: [state, action.payload],
    };
  }
  return state;
};

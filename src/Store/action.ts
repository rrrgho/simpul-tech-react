import { IAuthenticated } from "../Types/initial.type";
import { IMessage } from "../global.type";
import { ActionType } from "./action.type";

export const SET_AUTH = (payload: IAuthenticated) => {
  return {
    type: ActionType.SET_AUTHENTICATED,
    payload,
  };
};

export const SET_CHATROOM = (payload: Array<IMessage>) => {
  return {
    type: ActionType.SET_CHATROOM,
    payload,
  };
};

export const SET_APPEND_CHATROOM = (payload: IMessage) => {
  return {
    type: ActionType.APPEND_CHATROOM,
    payload,
  };
};

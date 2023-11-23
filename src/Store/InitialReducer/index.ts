import { IAuthenticated } from "../../Types/initial.type";
import { ActionType } from "../action.type";

const data: IAuthenticated = {
  user_id: undefined,
  name: "",
  access_token: undefined,
  is_authenticate: false,
};

export const InitialReducer = (state: IAuthenticated = data, action: any) => {
  if (action.type === ActionType.SET_AUTHENTICATED) {
    return {
      ...state,
      user_id: action.payload.user_id,
      name: action.payload.name,
      access_token: action.payload.access_token,
      is_authenticate: action.payload.is_authenticate,
    };
  }
  if (action.type === "RESET") {
    localStorage.clear();

    return {
      ...state,
      user_id: undefined,
      name: "",
      access_token: undefined,
      is_authenticate: false,
    };
  }
  return state;
};

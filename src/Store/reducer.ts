import { combineReducers } from "@reduxjs/toolkit";
import { InitialReducer } from "./InitialReducer/index";
import { ChatRoomReducer } from "./ChatRoomReducer/index";

export default combineReducers({
  InitialReducer,
  ChatRoomReducer,
});

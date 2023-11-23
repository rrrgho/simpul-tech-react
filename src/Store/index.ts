import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { IAuthenticated } from "../Types/initial.type";
import { IMessage } from "../global.type";
import rootReducer from "./reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const useStore = () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export type IRootState = {
  InitialReducer: IAuthenticated;
  ChatRoomReducer: { data: Array<IMessage> };
};

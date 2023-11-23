import { useState } from "react";
import useClientRequest from "../../service/useClientRequest";
import { useDispatch } from "react-redux";
import { SET_CHATROOM } from "../../Store/action";

export const useChatRoom = (group_id: number | any) => {
  const [query] = useState({ group_id });
  const dispatch = useDispatch();
  const service = useClientRequest({
    endpoint: "chat-room",
  });

  const chatroom = service.GetList({
    onSuccess: (res: any) => {
      const { data } = res.data.data;
      dispatch(SET_CHATROOM(data));
    },
    onError: (err: any) => console.log(err),
    query,
    queryKey: query,
    enabled: true,
  });

  return {
    chatroom,
  };
};

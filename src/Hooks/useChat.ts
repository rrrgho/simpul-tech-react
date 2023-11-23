import { useState } from "react";
import useClientRequest from "../service/useClientRequest";

const useChat = () => {
  const [query] = useState({ key: "CHATS" });
  const service = useClientRequest({
    endpoint: "groups",
  });

  const chats = service.GetList({
    onSuccess: (res: any) => {
      console.log(res);
    },
    onError: (err: any) => console.log(err),
    query,
    queryKey: query,
    enabled: true,
  });

  return {
    chats,
  };
};

export default useChat;

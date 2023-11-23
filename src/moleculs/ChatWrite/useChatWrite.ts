import useClientRequest from "../../service/useClientRequest";

export const useChatWrite = () => {
  const service = useClientRequest({
    endpoint: "send-message",
  });

  const sendMessage = service.RequestPost({
    onSuccess: (res: any) => {
      console.log(res);
    },
    onError: (err: any) => console.log(err),
  });

  return {
    sendMessage,
  };
};

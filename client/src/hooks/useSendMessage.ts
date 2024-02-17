import { useMutation } from "@tanstack/react-query";
import { sendMessage } from "../api/chat";
import { useChatStore } from "../store";

export const useSendMessage = () => {
  const { addMessage } = useChatStore();

  return useMutation({
    mutationFn: sendMessage,
    onSuccess: ({ data }) => {
      console.log({ data });
      addMessage(data.data);
    },
  });
};

import { useEffect } from "react";

import { useChatStore } from "../store";
import { useGetChat } from "./useGetChat";

export const useGetChatStore = (receiverId: string | null) => {
  const { data } = useGetChat(receiverId);
  const { setChat, chat } = useChatStore();
  //use to add new messages to array of message
  useEffect(() => {
    if (data?.data) {
      setChat(data.data);
    }
  }, [data, setChat]);

  return { chat };
};

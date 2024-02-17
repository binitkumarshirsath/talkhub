import { useEffect } from "react";
import { useSocket } from "../context/socket-context";
import { useChatStore } from "../store";
import { useChat } from "../context/chat-context";

export const useListenChat = () => {
  const { socket } = useSocket();
  const { addMessage, chat } = useChatStore();
  const { activeChat } = useChat();

  useEffect(() => {
    if (activeChat?._id && socket) {
      socket.on("send-message", (messageData) => {
        // Handle the received users here
        addMessage(messageData);
      });

      return () => {
        socket.off("send-message"); // Clean up the event listener
      };
    }
  }, [socket, activeChat, chat, addMessage]);
};

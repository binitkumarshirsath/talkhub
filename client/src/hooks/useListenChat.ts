import { useEffect } from "react";
import { useSocket } from "../context/socket-context";
import { useChatStore } from "../store";

export const useListenChat = () => {
  const { socket } = useSocket();
  const { addMessage, chat } = useChatStore();
  useEffect(() => {
    if (socket) {
      console.log("iran");
      socket.on("send-message", (messageData) => {
        // Handle the received users here

        addMessage(messageData);
      });

      return () => {
        socket.off("send-message"); // Clean up the event listener
      };
    }
  }, [socket, chat, addMessage]);
};

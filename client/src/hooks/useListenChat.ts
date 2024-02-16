import { useEffect } from "react";
import { useSocket } from "../context/socket-context";

export const useListenChat = () => {
  const { socket } = useSocket();
  useEffect(() => {
    if (socket) {
      console.log("iran");
      socket.on("send-message", (messageData) => {
        // Handle the received users here
        console.log(messageData);
      });

      return () => {
        socket.off("send-message"); // Clean up the event listener
      };
    }
  }, [socket]);
};

import { createContext, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useAuth } from "./auth-context";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

if (!BACKEND_URL) throw new Error("Backend url is missing.");

interface SocketContextProps {
  socket: Socket | null;
  onlineUsers: string[];
}

const SocketContext = createContext<SocketContextProps>(
  {} as SocketContextProps
);

const socket = io(BACKEND_URL, { autoConnect: false }); // Create the socket instance

export const SocketContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);

  const { auth } = useAuth();

  useEffect(() => {
    if (auth?._id) {
      socket.auth = { userId: auth._id }; // Set the user's id for authentication
      socket.connect(); // Connect to the server

      socket.on("active-user-list", (users: string[]) => {
        setOnlineUsers(users);
      });

      return () => {
        socket.close(); // Clean up the socket connection
      };
    } else {
      if (socket.connected) {
        socket.close(); // Disconnect the socket if the user is not authenticated
      }
    }
  }, [auth]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export function useSocket() {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket must be used inside SocketProvider.");
  }
  return context;
}

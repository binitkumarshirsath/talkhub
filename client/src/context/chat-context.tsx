import { createContext, useContext, useState } from "react";
import { User } from "./auth-context";

type ChatContextType = {
  activeChat: User | null;
  setActiveChat: React.Dispatch<React.SetStateAction<User>>;
};

const ChatContext = createContext<ChatContextType | null>(null);

export const ChatContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeChat, setActiveChat] = useState({} as User);
  return (
    <ChatContext.Provider value={{ activeChat, setActiveChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export function useChat() {
  const chat = useContext(ChatContext);
  if (!chat) {
    throw new Error("useChat should be used inside ChatContextProvider.");
  }
  return chat;
}

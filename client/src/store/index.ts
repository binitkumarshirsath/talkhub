import { create } from "zustand";
import { Chat } from "../types";

interface UseChatInterface {
  chat: Chat[];
  setChat: (newChat: Chat[]) => void;
  addMessage: (newMessage: Chat) => void;
}

//to store chat messages ,
export const useChatStore = create<UseChatInterface>((set) => ({
  chat: [],
  setChat: (newChat) => set((state) => ({ chat: [...state.chat, ...newChat] })),
  addMessage: (newMessage) =>
    set((state) => ({ chat: [...state.chat, newMessage] })),
}));

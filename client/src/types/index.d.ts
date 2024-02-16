import { User } from "../context/auth-context";

export type errorResponse = {
  response: {
    data: {
      message: string;
    };
  };
};

export type getAllUsersResponse = {
  success: true;
  total: number;
  users: User[];
};

export interface Chat {
  content: string;
  createdAt: Date;
  senderId: string;
  receiverId: string;
}

export type ChatData = {
  success: true;
  data: Chat[];
  message: string;
};

interface sendMessageProps {
  receiverId: string;
  content: string;
}

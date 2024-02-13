import apiConnector from ".";
import { User } from "../context/auth-context";
import { apiRoutes } from "./routes";

interface Chat {
  content: string;
  createdAt: Date;
  senderId: User;
  receiverId: User;
}

type ChatData = {
  success: true;
  data: Chat[];
  message: string;
};

export const getChat = (userId: string) =>
  apiConnector
    .get<ChatData>(apiRoutes.getChat + "/" + userId)
    .then((res) => res.data);

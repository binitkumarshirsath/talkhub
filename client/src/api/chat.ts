import apiConnector from ".";
import { ChatData, sendMessageProps } from "../types";
import { apiRoutes } from "./routes";

export const getChat = (userId: string | null) => {
  if (!userId) return;
  return apiConnector
    .get<ChatData>(apiRoutes.getChat + "/" + userId)
    .then((res) => res.data);
};

export const sendMessage = (params: sendMessageProps) =>
  apiConnector.post(apiRoutes.sendMessage, params);

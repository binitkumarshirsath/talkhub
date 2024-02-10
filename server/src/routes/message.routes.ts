import express from "express";
import { getChat, sendMessage } from "../controller/message.controller.js";
import { auth } from "../middleware/auth.js";
export const messagesRoutes = express.Router();

messagesRoutes.get("/get-chat/:receiverId", auth, getChat);

messagesRoutes.post("/send", auth, sendMessage);

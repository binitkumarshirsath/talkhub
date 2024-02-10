import express from "express";
import { userRouter } from "./user.routes.js";
import { messagesRoutes } from "./message.routes.js";
import { auth } from "../middleware/auth.js";

export const routes = express.Router();

routes.use("/auth", userRouter);

routes.use("/chat", messagesRoutes);

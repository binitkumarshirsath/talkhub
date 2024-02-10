import express from "express";
import { userRouter } from "./user.routes.js";

export const routes = express.Router();

routes.use("/auth", userRouter);

import express from "express";
import { signIn, signUp } from "../controller/user.controller.js";

export const userRouter = express.Router();

userRouter.post("/sign-up", signUp);

userRouter.post("/sign-in", signIn);

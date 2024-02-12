import express from "express";
import { signIn, signOut, signUp } from "../controller/user.controller.js";

export const userRouter = express.Router();

userRouter.post("/sign-up", signUp);

userRouter.post("/sign-in", signIn);

userRouter.post("/sign-out", signOut);

import express from "express";
import {
  getAllUsers,
  signIn,
  signOut,
  signUp,
} from "../controller/user.controller.js";
import { auth } from "../middleware/auth.js";

export const userRouter = express.Router();

userRouter.post("/sign-up", signUp);

userRouter.post("/sign-in", signIn);

userRouter.post("/sign-out", signOut);

userRouter.get("/users", auth, getAllUsers);

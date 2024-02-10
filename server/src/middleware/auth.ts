import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ENV_CONFIG } from "../config/env-config.js";

export const auth = async (req, res: Response, next: NextFunction) => {
  const token =
    req.cookies || req.headers?.authorization?.replace("Bearer ", "");

  if (!token) throw new Error("Token is missing.");
  const decode = jwt.verify(token, ENV_CONFIG.ACCESS_TOKEN_KEY);
  if (!decode) throw new Error("Invalid expired.");

  req.user = decode;
  next();
};

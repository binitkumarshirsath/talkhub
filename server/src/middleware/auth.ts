import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ENV_CONFIG } from "../config/env-config.js";
import { CustomError } from "../utils/custom-error.js";

export const auth = async (req, res: Response, next: NextFunction) => {
  console.log("Cookie", JSON.stringify(req.cookies));

  const token =
    req.cookies.token || req.headers?.authorization?.replace("Bearer ", "");

  if (!token) throw new CustomError("Token is missing.", 404);
  const decode = jwt.verify(token, ENV_CONFIG.ACCESS_TOKEN_KEY);
  if (!decode) throw new CustomError("Token invalid | expired.", 402);

  req.user = decode;
  next();
};

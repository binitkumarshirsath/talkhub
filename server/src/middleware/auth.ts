import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ENV_CONFIG } from "../config/env-config.js";
import { CustomError } from "../utils/custom-error.js";

export const auth = async (req, res: Response, next: NextFunction) => {
  const token =
    req.cookies.token || req.headers?.authorization?.replace("Bearer ", "");

  if (!token) throw new CustomError("Token is missing.", 401);

  try {
    const decode = jwt.verify(token, ENV_CONFIG.ACCESS_TOKEN_KEY);

    if (!decode) throw new CustomError("Token invalid | expired.", 401);

    req.user = decode;
    next();
  } catch (error) {
    // Handle the error appropriately, for example:
    if (error instanceof jwt.TokenExpiredError) {
      throw new CustomError("Token expired.", 401);
    } else if (error instanceof jwt.JsonWebTokenError) {
      throw new CustomError("Invalid token.", 401);
    } else {
      throw new CustomError(
        "Something went wrong with token verification.",
        500
      );
    }
  }
};

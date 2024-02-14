import { Request, Response, NextFunction } from "express";
import { CustomError } from "./custom-error.js";

export const errorHandler = async (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    err: err,
  });
};

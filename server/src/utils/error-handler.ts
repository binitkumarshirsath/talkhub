import { Request, Response, NextFunction } from "express";

export const errorHandler = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  res.status(500).json({
    success: false,
    message: err.message || "Internal server error.",
    err,
  });
};

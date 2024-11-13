import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json({
    success: false,
    status: 500,
    message: err.message || "Something went wrong",
  });
};

export default globalErrorHandler;

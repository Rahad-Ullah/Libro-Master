import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err?.statusCode || 500;

  res.status(status).json({
    success: false,
    status,
    message: err.message || "Something went wrong",
  });
};

export default globalErrorHandler;

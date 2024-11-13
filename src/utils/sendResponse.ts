import { Response } from "express";

export const sendResponse = <T>(
  res: Response,
  jsonData: {
    success: boolean;
    status: number;
    message: string;
    data?: T | null | undefined;
  }
) => {
  res.status(jsonData.status).json({
    success: jsonData.success,
    status: jsonData.status,
    message: jsonData.message,
    data: jsonData.data || null || undefined,
  });
};

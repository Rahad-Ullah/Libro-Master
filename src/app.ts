import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

const app: Application = express();

app.use(cors());
app.use(cookieParser());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api", router);

// global error handler
app.use(globalErrorHandler);

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Libro Master Server is running",
  });
});

// not found handler
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({
    success: false,
    message: "API not found",
    error: {
      path: req.originalUrl,
      message: "Your requested API is not available",
    },
  });
});

export default app;

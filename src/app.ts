import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./app/routes";

const app: Application = express();

app.use(cors());
app.use(cookieParser());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Libro Master Server is running",
  });
});

export default app;

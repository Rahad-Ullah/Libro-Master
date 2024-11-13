import express from "express";
import { borrowRecordControllers } from "../Borrow/borrow.controller";
import validateRequest from "../../middlewares/validateRequest";
import { returnValidationSchema } from "./return.validation";

const router = express.Router();

// return a book
router.post(
  "/",
  validateRequest(returnValidationSchema),
  borrowRecordControllers.returnBook
);

export const returnBookRoutes = router;

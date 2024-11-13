import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { borrowRecordControllers } from "./borrow.controller";
import { borrowRecordValidationSchemas } from "./borrow.validation";
const router = express.Router();

// borrow a book
router.post(
  "/",
  validateRequest(borrowRecordValidationSchemas.createValidationSchema),
  borrowRecordControllers.borrowBook
);

// get overdue borrow books
router.get(
  "/overdue", borrowRecordControllers.getOverdueBorrowBooks
);

export const borrowRecordRoutes = router;

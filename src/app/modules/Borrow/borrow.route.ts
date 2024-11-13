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

export const borrowRecordRoutes = router;

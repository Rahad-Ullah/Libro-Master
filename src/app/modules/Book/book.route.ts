import express from "express";
import { bookControllers } from "./book.controller";
import validateRequest from "../../middlewares/validateRequest";
import { bookValidationSchemas } from "./book.validation";
const router = express.Router();

router.post(
  "/",
  validateRequest(bookValidationSchemas.createValidationSchema),
  bookControllers.createBook
);

export const bookRoutes = router;

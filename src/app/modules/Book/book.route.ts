import express from "express";
import { bookControllers } from "./book.controller";
import validateRequest from "../../middlewares/validateRequest";
import { bookValidationSchemas } from "./book.validation";
const router = express.Router();

// create a new book
router.post(
  "/",
  validateRequest(bookValidationSchemas.createValidationSchema),
  bookControllers.createBook
);

// retrieve all books
router.get('/', bookControllers.getAllBooks)

// retrieve single book
router.get('/:bookId', bookControllers.getSingleBook)

// update book
router.put('/:bookId', bookControllers.updateBook)

// delete book
router.delete('/:bookId', bookControllers.deleteBook)

export const bookRoutes = router;

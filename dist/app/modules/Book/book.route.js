"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const book_validation_1 = require("./book.validation");
const router = express_1.default.Router();
// create a new book
router.post("/", (0, validateRequest_1.default)(book_validation_1.bookValidationSchemas.createValidationSchema), book_controller_1.bookControllers.createBook);
// retrieve all books
router.get('/', book_controller_1.bookControllers.getAllBooks);
// retrieve single book
router.get('/:bookId', book_controller_1.bookControllers.getSingleBook);
// update book
router.put('/:bookId', book_controller_1.bookControllers.updateBook);
// delete book
router.delete('/:bookId', book_controller_1.bookControllers.deleteBook);
exports.bookRoutes = router;

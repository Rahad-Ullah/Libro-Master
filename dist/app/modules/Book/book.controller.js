"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookControllers = void 0;
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const sendResponse_1 = require("../../../utils/sendResponse");
const http_status_codes_1 = require("http-status-codes");
const book_service_1 = require("./book.service");
// create a new book
const createBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.bookServices.createBookIntoDB(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Book created successfully",
        data: result,
    });
}));
// retrieve all books
const getAllBooks = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.bookServices.getAllBooksFromDB();
    if (result.length < 1) {
        (0, sendResponse_1.sendResponse)(res, {
            success: false,
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: "No books found",
            data: result,
        });
    }
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Books retrieved successfully",
        data: result,
    });
}));
// retrieve single book by bookId
const getSingleBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.bookServices.getSingleBookFromDB(req.params.bookId);
    if (!result) {
        (0, sendResponse_1.sendResponse)(res, {
            success: false,
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: "No book found",
            data: result,
        });
    }
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Book retrieved successfully",
        data: result,
    });
}));
// update single book by bookId
const updateBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.bookServices.updateBookIntoDB(req.params.bookId, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Book updated successfully",
        data: result,
    });
}));
// delete single book by bookId
const deleteBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield book_service_1.bookServices.deleteBookFromDB(req.params.bookId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Book successfully deleted",
    });
}));
exports.bookControllers = {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook
};

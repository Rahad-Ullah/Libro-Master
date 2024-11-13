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
exports.borrowRecordControllers = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const sendResponse_1 = require("../../../utils/sendResponse");
const borrow_service_1 = require("./borrow.service");
// borrow a book
const borrowBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrow_service_1.borrowRecordServices.borrowBookIntoDB(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Book borrowed successfully",
        data: result,
    });
}));
// get overdue borrow books
const getOverdueBorrowBooks = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrow_service_1.borrowRecordServices.getOverdueBorrowBooksFromBD();
    if (result.length < 1) {
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            status: http_status_codes_1.StatusCodes.OK,
            message: "No overdue books",
            data: result
        });
    }
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Overdue borrow list fetched",
        data: result
    });
}));
// return a book
const returnBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { borrowId } = req.body;
    yield borrow_service_1.borrowRecordServices.returnBookIntoDB(borrowId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Book returned successfully",
    });
}));
exports.borrowRecordControllers = {
    borrowBook,
    returnBook,
    getOverdueBorrowBooks,
};

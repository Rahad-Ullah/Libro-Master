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
exports.borrowRecordServices = void 0;
const prisma_1 = __importDefault(require("../../../utils/prisma"));
const calculateOverdueBooks_1 = require("../../../utils/calculateOverdueBooks");
const AppError_1 = __importDefault(require("../../../utils/AppError"));
const http_status_codes_1 = require("http-status-codes");
// borrow a book
const borrowBookIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const memberData = yield prisma_1.default.member.findUnique({
        where: {
            memberId: payload.memberId,
        },
    });
    // check if the member exists
    if (!memberData) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, "Invalid member ID");
    }
    const bookData = yield prisma_1.default.book.findUnique({
        where: {
            bookId: payload.bookId,
        },
    });
    // check if the book exists
    if (!bookData) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, "Invalid book ID");
    }
    const result = yield prisma_1.default.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        const borrowData = yield transactionClient.borrowRecord.create({
            data: payload,
        });
        // decrease available copies by 1
        yield transactionClient.book.update({
            where: {
                bookId: payload.bookId,
            },
            data: {
                availableCopies: bookData.availableCopies - 1,
            },
        });
        return borrowData;
    }));
    return result;
});
// get overdue borrow books
const getOverdueBorrowBooksFromBD = () => __awaiter(void 0, void 0, void 0, function* () {
    const borrowRecords = yield prisma_1.default.borrowRecord.findMany({
        include: {
            book: {
                select: {
                    title: true,
                },
            },
            member: {
                select: {
                    name: true,
                },
            },
        },
    });
    // Filter overdue records and calculate overdue days
    const overdueRecords = (0, calculateOverdueBooks_1.calculateOverdueBooks)(borrowRecords);
    return overdueRecords;
});
// return book
const returnBookIntoDB = (borrowId) => __awaiter(void 0, void 0, void 0, function* () {
    const borrowData = yield prisma_1.default.borrowRecord.findUnique({
        where: {
            borrowId,
        },
    });
    // check if the borrow data exists
    if (!borrowData) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, "Invalid borrow ID");
    }
    const bookData = yield prisma_1.default.book.findUnique({
        where: {
            bookId: borrowData.bookId,
        },
    });
    const result = yield prisma_1.default.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        // return the book
        const returnData = yield transactionClient.borrowRecord.delete({
            where: {
                borrowId,
            },
        });
        // increase available copies by 1
        yield transactionClient.book.update({
            where: {
                bookId: bookData === null || bookData === void 0 ? void 0 : bookData.bookId,
            },
            data: {
                availableCopies: (bookData === null || bookData === void 0 ? void 0 : bookData.availableCopies) + 1,
            },
        });
        return borrowData;
    }));
    return result;
});
exports.borrowRecordServices = {
    borrowBookIntoDB,
    returnBookIntoDB,
    getOverdueBorrowBooksFromBD,
};

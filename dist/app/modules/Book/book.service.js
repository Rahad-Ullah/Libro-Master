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
exports.bookServices = void 0;
const prisma_1 = __importDefault(require("../../../utils/prisma"));
const createBookIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const bookData = yield prisma_1.default.book.findFirst({
        where: {
            title: payload.title,
        },
    });
    // check if the book already exists
    if (bookData) {
        throw new Error(`This book already exists`);
    }
    const result = yield prisma_1.default.book.create({
        data: payload,
    });
    return result;
});
// retrieve all books
const getAllBooksFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findMany();
    return result;
});
// retrieve single book by bookId
const getSingleBookFromDB = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findUnique({
        where: {
            bookId
        }
    });
    return result;
});
// update single book by bookId
const updateBookIntoDB = (bookId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const bookData = yield prisma_1.default.book.findUnique({
        where: {
            bookId
        }
    });
    if (!bookData) {
        throw new Error('Book does not exist');
    }
    const result = yield prisma_1.default.book.update({
        where: {
            bookId
        },
        data: payload
    });
    return result;
});
// delete single book by bookId
const deleteBookFromDB = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const bookData = yield prisma_1.default.book.findUnique({
        where: {
            bookId
        }
    });
    if (!bookData) {
        throw new Error('Book does not exist');
    }
    const result = yield prisma_1.default.book.delete({
        where: {
            bookId
        }
    });
    return result;
});
exports.bookServices = {
    createBookIntoDB,
    getAllBooksFromDB,
    getSingleBookFromDB,
    updateBookIntoDB,
    deleteBookFromDB
};

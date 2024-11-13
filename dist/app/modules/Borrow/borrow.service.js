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
const borrowBookIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const memberData = yield prisma_1.default.member.findUnique({
        where: {
            memberId: payload.memberId,
        },
    });
    // check if the member exists
    if (!memberData) {
        throw new Error("Invalid member ID");
    }
    const bookData = yield prisma_1.default.book.findUnique({
        where: {
            bookId: payload.bookId,
        },
    });
    // check if the book exists
    if (!bookData) {
        throw new Error("Invalid book ID");
    }
    const result = yield prisma_1.default.borrowRecord.create({
        data: payload,
    });
    return result;
});
const returnBookIntoDB = (borrowId) => __awaiter(void 0, void 0, void 0, function* () {
    const borrowData = yield prisma_1.default.borrowRecord.findUnique({
        where: {
            borrowId,
        },
    });
    // check if the borrow data exists
    if (!borrowData) {
        throw new Error("Invalid borrow ID");
    }
    const result = yield prisma_1.default.borrowRecord.delete({
        where: {
            borrowId,
        },
    });
    return result;
});
exports.borrowRecordServices = {
    borrowBookIntoDB,
    returnBookIntoDB,
};

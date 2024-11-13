"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowRecordValidationSchemas = void 0;
const zod_1 = require("zod");
const createValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        bookId: zod_1.z.string().min(1, { message: "Book Id is required" }),
        memberId: zod_1.z.string().min(1, { message: "Member Id is required" }),
    }),
});
exports.borrowRecordValidationSchemas = {
    createValidationSchema,
};

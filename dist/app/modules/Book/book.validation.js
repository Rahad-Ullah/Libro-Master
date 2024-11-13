"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookValidationSchemas = void 0;
const zod_1 = require("zod");
const createValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, { message: "Title is required" }),
        genre: zod_1.z.string().min(1, { message: "Genres is required" }),
        publishedYear: zod_1.z.number().min(1, { message: "Published Year is required" }),
        totalCopies: zod_1.z.number().min(1, { message: "Total Copies is required" }),
        availableCopies: zod_1.z
            .number()
            .min(1, { message: "Available Copies is required" }),
    }),
});
exports.bookValidationSchemas = {
    createValidationSchema,
};

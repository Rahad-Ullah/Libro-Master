"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberValidationSchemas = void 0;
const zod_1 = require("zod");
const createValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, { message: "Name is required" }),
        email: zod_1.z.string().min(1, { message: "Email is required" }),
        phone: zod_1.z.string().min(1, { message: "Phone is required" }),
        membershipDate: zod_1.z.string().optional(),
    }),
});
const updateValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().optional(),
        phone: zod_1.z.string().optional(),
    }),
});
exports.memberValidationSchemas = {
    createValidationSchema,
    updateValidationSchema,
};

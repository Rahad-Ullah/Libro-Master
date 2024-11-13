import { z } from "zod";

const createValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().min(1, { message: "Email is required" }),
    phone: z.string().min(1, { message: "Phone is required" }),
    membershipDate: z.string().optional(),
  }),
});

const updateValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
  }),
});

export const memberValidationSchemas = {
  createValidationSchema,
  updateValidationSchema,
};

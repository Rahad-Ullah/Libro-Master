import { z } from "zod";

const createValidationSchema = z.object({
  body: z.object({
    bookId: z.string().min(1, { message: "Book Id is required" }),
    memberId: z.string().min(1, { message: "Member Id is required" }),
  }),
});

export const borrowRecordValidationSchemas = {
  createValidationSchema,
};

import { z } from "zod";

const createValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, { message: "Title is required" }),
    genre: z.string().min(1, { message: "Genres is required" }),
    publishedYear: z.number().min(1, { message: "Published Year is required" }),
    totalCopies: z.number().min(1, { message: "Total Copies is required" }),
    availableCopies: z
      .number()
      .min(1, { message: "Available Copies is required" }),
  }),
});

export const bookValidationSchemas = {
  createValidationSchema,
};

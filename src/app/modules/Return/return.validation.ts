import { z } from "zod";

export const returnValidationSchema = z.object({
  body: z.object({
    borrowId: z.string().min(1, { message: "Borrow ID is required" }),
  }),
});

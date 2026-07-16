import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .trim()
    .min(4, "Username must contain at least 3 characters.")
    .max(30, "Username cannot exceed 30 characters."),

  password: z
    .string()
    .min(6, "Password must contain at least 6 characters.")
    .max(100, "Password cannot exceed 100 characters."),
});

export type LoginFormData = z.infer<typeof loginSchema>;    
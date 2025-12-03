import { z } from "zod";

export const emailSchema = z.string().email("Invalid email address");

export const phoneSchema = z
  .string()
  .regex(/^[0-9]{10,}$/, "Phone must be at least 10 digits")
  .optional();

export const nameSchema = z
  .string()
  .min(2, "Name must be at least 2 characters")
  .max(100, "Name must not exceed 100 characters");

export const numberSchema = (min = 0, max?: number) => {
  let schema = z.coerce.number().min(min, `Must be at least ${min}`);
  if (max !== undefined) {
    schema = schema.max(max, `Must not exceed ${max}`);
  }
  return schema;
};

export const createOrderSchema = z.object({
  customerName: nameSchema,
  customerEmail: emailSchema,
  customerPhone: phoneSchema,
  productName: nameSchema,
  quantity: numberSchema(1, 1000),
  unitPrice: numberSchema(0),
  notes: z.string().max(500, "Notes must not exceed 500 characters").optional(),
});

export type CreateOrderFormData = z.infer<typeof createOrderSchema>;

export const userProfileSchema = z.object({
  firstName: nameSchema,
  lastName: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  role: z.enum(["user", "admin", "moderator"]),
});

export type UserProfileFormData = z.infer<typeof userProfileSchema>;

import { z } from "zod";

const carModelValidationSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Name must be required",
    })
    .optional(),
});

export const carModelValidation = {
  carModelValidationSchema,
};

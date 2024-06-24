import { z } from "zod";

const carModelValidationSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Name must be required",
    })
    .optional(),
});

const updateCarModelValidationSchema = z.object({
  name: z.string({}).optional(),
  description: z.string({}).optional(),
  color: z.string({}).optional(),
  isElectric: z.boolean({}).optional(),
  features: z.array(z.string()).optional(),
  pricePerHour: z.number().optional(),
});

export const carModelValidation = {
  carModelValidationSchema,
  updateCarModelValidationSchema,
};

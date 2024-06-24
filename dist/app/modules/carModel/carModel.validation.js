"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carModelValidation = void 0;
const zod_1 = require("zod");
const carModelValidationSchema = zod_1.z.object({
    name: zod_1.z
        .string({
        invalid_type_error: "Name must be required",
    })
        .optional(),
});
const updateCarModelValidationSchema = zod_1.z.object({
    name: zod_1.z.string({}).optional(),
    description: zod_1.z.string({}).optional(),
    color: zod_1.z.string({}).optional(),
    isElectric: zod_1.z.boolean({}).optional(),
    features: zod_1.z.array(zod_1.z.string()).optional(),
    pricePerHour: zod_1.z.number().optional(),
});
exports.carModelValidation = {
    carModelValidationSchema,
    updateCarModelValidationSchema,
};

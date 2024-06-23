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
exports.carModelValidation = {
    carModelValidationSchema,
};

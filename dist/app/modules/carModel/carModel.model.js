"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarModel = void 0;
const mongoose_1 = require("mongoose");
const carModelSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    isElectric: {
        type: Boolean,
        required: true,
    },
    features: {
        type: [String],
        required: true,
    },
    pricePerHour: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ["available", "not available"],
    },
    isDeleted: { type: Boolean },
}, {
    timestamps: true,
});
exports.CarModel = (0, mongoose_1.model)("Cars", carModelSchema);

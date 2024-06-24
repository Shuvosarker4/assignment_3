"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingModel = void 0;
const mongoose_1 = require("mongoose");
const bookingModelSchema = new mongoose_1.Schema({
    date: {
        type: Date,
        required: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "User id is required"],
        unique: true,
        ref: "UserModel",
    },
    car: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "Car id is required"],
        unique: true,
        ref: "CarModel",
    },
    startTime: {
        type: String,
        required: true,
    },
    totalCost: { type: Number },
    endTime: { type: String },
    isDeleted: { type: Boolean },
}, {
    timestamps: true,
});
exports.bookingModel = (0, mongoose_1.model)("bookingModel", bookingModelSchema);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userModelSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: { type: String, required: true, unique: true },
    role: {
        type: String,
        enum: ["user", "admin"],
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.UserModel = (0, mongoose_1.model)("Users", userModelSchema);

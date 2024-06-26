"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingModelRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bookingModel_controller_1 = require("./bookingModel.controller");
const router = express_1.default.Router();
router.post("/", bookingModel_controller_1.BookingModelController.createBookingModel);
router.get("/", bookingModel_controller_1.BookingModelController.getAllBookingModel);
exports.BookingModelRoutes = router;

import express from "express";
import { BookingModelController } from "./bookingModel.controller";
const router = express.Router();

router.post("/", BookingModelController.createBookingModel);

export const BookingModelRoutes = router;

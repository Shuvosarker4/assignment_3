import { Schema, model } from "mongoose";
import { TBookingModel } from "./bookingModel.interface";

const bookingModelSchema = new Schema<TBookingModel>(
  {
    date: {
      type: Date,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "User id is required"],
      unique: true,
      ref: "UserModel",
    },
    car: {
      type: Schema.Types.ObjectId,
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
  },
  {
    timestamps: true,
  }
);

export const bookingModel = model<TBookingModel>(
  "bookingModel",
  bookingModelSchema
);

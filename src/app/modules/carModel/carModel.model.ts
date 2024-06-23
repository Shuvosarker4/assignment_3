import { Schema, model } from "mongoose";
import { TCarModel } from "./carModel.interface";

const carModelSchema = new Schema<TCarModel>(
  {
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
  },
  {
    timestamps: true,
  }
);

export const CarModel = model<TCarModel>("Cars", carModelSchema);

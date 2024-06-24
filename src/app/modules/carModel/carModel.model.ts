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
    status: {
      type: String,
      enum: ["available", "not available"],
    },
    isDeleted: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

carModelSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

carModelSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
carModelSchema.pre("updateOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

carModelSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

export const CarModel = model<TCarModel>("Cars", carModelSchema);

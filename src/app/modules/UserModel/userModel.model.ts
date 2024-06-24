import { Schema, model } from "mongoose";
import { TUserModel } from "./userModel.interface";

const userModelSchema = new Schema<TUserModel>(
  {
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
  },
  {
    timestamps: true,
  }
);

export const UserModel = model<TUserModel>("Users", userModelSchema);

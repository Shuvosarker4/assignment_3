import httpStatus from "http-status";
import AppError from "../../middlewares/AppError";
import { TBookingModel } from "./bookingModel.interface";
import { bookingModel } from "./bookingModel.model";

const createBookingModelIntoDB = async (bookingData: TBookingModel) => {
  const result = await bookingModel.create(bookingData);
  return result;
};
const getAllBookingModelIntoDB = async () => {
  const result = await bookingModel.find();
  if (result.length === 0) {
    throw new AppError(httpStatus.NOT_FOUND, "No Data Found");
  }
  return result;
};

export const BookingModelService = {
  createBookingModelIntoDB,
  getAllBookingModelIntoDB,
};

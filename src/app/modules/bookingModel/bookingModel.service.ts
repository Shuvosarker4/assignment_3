import { TBookingModel } from "./bookingModel.interface";
import { bookingModel } from "./bookingModel.model";

const createBookingModelIntoDB = async (bookingData: TBookingModel) => {
  const result = await bookingModel.create(bookingData);
  return result;
};

export const BookingModelService = {
  createBookingModelIntoDB,
};

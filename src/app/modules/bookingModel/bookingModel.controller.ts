import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BookingModelService } from "./bookingModel.service";

const createBookingModel = catchAsync(async (req, res) => {
  const bookingModelData = req.body;
  const { data, ...rest } = bookingModelData;
  if (!bookingModelData?.hasOwnProperty("isDeleted")) {
    bookingModelData["isDeleted"] = false;
  }
  if (!bookingModelData?.hasOwnProperty("endTime")) {
    bookingModelData["endTime"] = null;
  }
  if (!bookingModelData?.hasOwnProperty("totalCost")) {
    bookingModelData["totalCost"] = 0;
  }
  const result = await BookingModelService.createBookingModelIntoDB(
    bookingModelData
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "You Booked Car successfully",
    data: result,
  });
});

export const BookingModelController = {
  createBookingModel,
};

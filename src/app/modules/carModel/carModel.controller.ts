import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { CarModelService } from "./carModel.service";

const createCarModel = catchAsync(async (req, res) => {
  const carModelData = req.body;
  const result = await CarModelService.createCarModelIntoDB(carModelData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User is created successfully",
    data: result,
  });
});

export const CarModelController = {
  createCarModel,
};

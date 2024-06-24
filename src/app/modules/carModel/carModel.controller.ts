import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { CarModelService } from "./carModel.service";

const createCarModel = catchAsync(async (req, res) => {
  const carModelData = req.body;
  // const keys = Object.keys(carModelData);
  const { name, description, ...rest } = carModelData;
  if (!carModelData?.hasOwnProperty("isDeleted")) {
    carModelData["isDeleted"] = false;
  }
  if (!carModelData?.hasOwnProperty("status")) {
    carModelData["status"] = "available";
  }
  const result = await CarModelService.createCarModelIntoDB(carModelData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User is created successfully",
    data: result,
  });
});

const getAllCarModel = catchAsync(async (req, res) => {
  const result = await CarModelService.getAllCarModelIntoDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cars is get successfully",
    data: result,
  });
});

const getSingleCar = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CarModelService.getSingleCarFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Car is get successfully",
    data: result,
  });
});

const updateSingleCar = catchAsync(async (req, res) => {
  const { id } = req.params;
  const car = req.body;
  const result = await CarModelService.updateSingleCarFromDB(id, car);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Car is updated successfully",
    data: result,
  });
});

const deleteACar = catchAsync(async (req, res) => {
  const { Id } = req.params;
  const result = await CarModelService.deleteACarFromDB(Id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Car is deleted successfully",
    data: result,
  });
});

export const CarModelController = {
  createCarModel,
  getAllCarModel,
  getSingleCar,
  updateSingleCar,
  deleteACar,
};

import { UserModelService } from "./userModel.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createUserModel = catchAsync(async (req, res) => {
  const userModelData = req.body;
  const result = await UserModelService.createUserModelIntoDB(userModelData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User is created successfully",
    data: result,
  });
});

export const UserModelController = {
  createUserModel,
};

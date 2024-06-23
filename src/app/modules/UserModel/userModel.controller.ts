import { Request, Response } from "express";
import { UserModelService } from "./userModel.service";

const createUserModel = async (req: Request, res: Response) => {
  try {
    const userModelData = req.body;
    const result = await UserModelService.createUserModelIntoDB(userModelData);
    res.json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.json({
      success: false,
      message: "Failed to fetch data!",
      data: err,
    });
  }
};

export const UserModelController = {
  createUserModel,
};

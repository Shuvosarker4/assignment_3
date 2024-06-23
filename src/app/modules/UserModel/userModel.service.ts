import { TUserModel } from "./userModel.interface";
import { UserModel } from "./userModel.model";

const createUserModelIntoDB = async (userModel: TUserModel) => {
  const result = await UserModel.create(userModel);
  return result;
};

export const UserModelService = {
  createUserModelIntoDB,
};

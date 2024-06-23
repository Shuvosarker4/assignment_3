import { TCarModel } from "./carModel.interface";
import { CarModel } from "./carModel.model";

const createCarModelIntoDB = async (userModel: TCarModel) => {
  const result = await CarModel.create(userModel);
  return result;
};

export const CarModelService = {
  createCarModelIntoDB,
};

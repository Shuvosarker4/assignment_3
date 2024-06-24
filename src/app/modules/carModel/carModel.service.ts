import httpStatus from "http-status";
import AppError from "../../middlewares/AppError";
import { TCarModel } from "./carModel.interface";
import { CarModel } from "./carModel.model";

const createCarModelIntoDB = async (userModel: TCarModel) => {
  const result = await CarModel.create(userModel);
  return result;
};

const getAllCarModelIntoDB = async () => {
  const result = await CarModel.find();
  return result;
};

const getSingleCarFromDB = async (id: string) => {
  const result = await CarModel.findOne({ _id: id });
  return result;
};

const updateSingleCarFromDB = async (
  id: string,
  payload: Partial<TCarModel>
) => {
  const { ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  const result = await CarModel.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteACarFromDB = async (id: string) => {
  const result = await CarModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export const CarModelService = {
  createCarModelIntoDB,
  getAllCarModelIntoDB,
  getSingleCarFromDB,
  updateSingleCarFromDB,
  deleteACarFromDB,
};

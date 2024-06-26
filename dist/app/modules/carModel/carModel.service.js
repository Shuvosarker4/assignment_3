"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarModelService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../middlewares/AppError"));
const carModel_model_1 = require("./carModel.model");
const createCarModelIntoDB = (userModel) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield carModel_model_1.CarModel.create(userModel);
    return result;
});
const getAllCarModelIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield carModel_model_1.CarModel.find();
    if (result.length === 0) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "No Data Found");
    }
    return result;
});
const getSingleCarFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield carModel_model_1.CarModel.findOne({ _id: id });
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "No Data Found");
    }
    return result;
});
const updateSingleCarFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const remainingStudentData = __rest(payload, []);
    const modifiedUpdatedData = Object.assign({}, remainingStudentData);
    const result = yield carModel_model_1.CarModel.findByIdAndUpdate(id, modifiedUpdatedData, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteACarFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield carModel_model_1.CarModel.updateOne({ id }, { isDeleted: true });
    return result;
});
exports.CarModelService = {
    createCarModelIntoDB,
    getAllCarModelIntoDB,
    getSingleCarFromDB,
    updateSingleCarFromDB,
    deleteACarFromDB,
};

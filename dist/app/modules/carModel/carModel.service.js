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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarModelService = void 0;
const carModel_model_1 = require("./carModel.model");
const createCarModelIntoDB = (userModel) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield carModel_model_1.CarModel.create(userModel);
    return result;
});
exports.CarModelService = {
    createCarModelIntoDB,
};

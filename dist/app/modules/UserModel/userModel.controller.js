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
exports.UserModelController = void 0;
const userModel_service_1 = require("./userModel.service");
const createUserModel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userModelData = req.body;
        const result = yield userModel_service_1.UserModelService.createUserModelIntoDB(userModelData);
        res.json({
            success: true,
            message: "User created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.json({
            success: false,
            message: "Failed to fetch data!",
            data: err,
        });
    }
});
exports.UserModelController = {
    createUserModel,
};

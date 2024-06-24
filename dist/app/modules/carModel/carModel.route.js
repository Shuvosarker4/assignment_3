"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarModelRoutes = void 0;
const express_1 = __importDefault(require("express"));
const carModel_controller_1 = require("./carModel.controller");
const router = express_1.default.Router();
router.post("/", carModel_controller_1.CarModelController.createCarModel);
router.get("/", carModel_controller_1.CarModelController.getAllCarModel);
router.get("/:id", carModel_controller_1.CarModelController.getSingleCar);
router.put("/:id", carModel_controller_1.CarModelController.updateSingleCar);
exports.CarModelRoutes = router;

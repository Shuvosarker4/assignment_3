import express from "express";
import { CarModelService } from "./carModel.service";
import { CarModelController } from "./carModel.controller";
const router = express.Router();

router.post("/", CarModelController.createCarModel);
router.get("/", CarModelController.getAllCarModel);
router.get("/:id", CarModelController.getSingleCar);
router.put("/:id", CarModelController.updateSingleCar);

export const CarModelRoutes = router;

import express from "express";
import { CarModelController } from "./carModel.controller";
const router = express.Router();

router.post("/", CarModelController.createCarModel);
router.get("/", CarModelController.getAllCarModel);
router.get("/:id", CarModelController.getSingleCar);
router.put("/:id", CarModelController.updateSingleCar);
router.delete("/:id", CarModelController.deleteACar);

export const CarModelRoutes = router;

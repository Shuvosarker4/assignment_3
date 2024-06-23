import express from "express";
import { CarModelService } from "./carModel.service";
import { CarModelController } from "./carModel.controller";
const router = express.Router();

router.post("/", CarModelController.createCarModel);

export const CarModelRoutes = router;

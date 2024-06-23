import express from "express";
import { UserModelController } from "./userModel.controller";
const router = express.Router();

router.post("/signup", UserModelController.createUserModel);

export const UserModelRoutes = router;

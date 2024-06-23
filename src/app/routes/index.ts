import { Router } from "express";
import { UserModelRoutes } from "../modules/UserModel/userModel.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/signup",
    route: UserModelRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

import { Router } from "express";
import { UserModelRoutes } from "../modules/UserModel/userModel.route";
import { CarModelRoutes } from "../modules/carModel/carModel.route";
import { BookingModelRoutes } from "../modules/bookingModel/bookingModel.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth/signup",
    route: UserModelRoutes,
  },
  {
    path: "/cars",
    route: CarModelRoutes,
  },
  {
    path: "/bookings",
    route: BookingModelRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

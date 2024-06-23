"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userModel_route_1 = require("../modules/UserModel/userModel.route");
const carModel_route_1 = require("../modules/carModel/carModel.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/auth/signup",
        route: userModel_route_1.UserModelRoutes,
    },
    {
        path: "/cars",
        route: carModel_route_1.CarModelRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userModel_route_1 = require("../modules/UserModel/userModel.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/signup",
        route: userModel_route_1.UserModelRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;

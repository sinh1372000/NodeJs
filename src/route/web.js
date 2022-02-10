import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRouters = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/test', homeController.gettest);

    return app.use("/", router)
}

module.exports = initWebRouters;
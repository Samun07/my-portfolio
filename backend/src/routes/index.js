const { Router } = require("express");

const projectsRouter = require("./projectsRouter");

const mainRouter = Router();

mainRouter.use("/projects", projectsRouter);

module.exports = mainRouter;

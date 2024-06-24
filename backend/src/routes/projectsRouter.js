const { Router } = require("express");
const projectsController = require("../controllers/projectsController");

const projectsRouter = Router();

projectsRouter.get("/", projectsController.getAllProjects);

module.exports = projectsRouter;

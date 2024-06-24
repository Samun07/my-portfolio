const projectService = require("../services/projectsService");

const catchAsync = require("../utils/catchAsync");

getAllProjects = async (req, res) => {
  const Projects = await projectService.getAllProjects();
  res.send(Projects);
};

module.exports = {
  getAllProjects: catchAsync(getAllProjects),
};

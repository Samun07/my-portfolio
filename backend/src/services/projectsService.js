const Project = require("../models/Project");

module.exports = {
  getAllProjects: async () => {
    const projects = await Project.find();
    return projects;
  },
};

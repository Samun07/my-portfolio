const Project = require("./Project");

class Repository {
  constructor() {
    this.projects = [];
  }
  createProject({
    type,
    title,
    description,
    frontlink,
    backlink,
    tags,
    linkproject,
    image,
  }) {
    const newProject = new Project(
      type,
      title,
      description,
      frontlink,
      backlink,
      tags,
      linkproject,
      image
    );
    this.projects.push(newProject);
  }
}

module.exports = Repository;

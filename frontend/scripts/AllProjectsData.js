const axios = require("axios");
const renderAllProjectsCards = require("./RenderAllProjectsCards");
const Repository = require("./Repository");
const repository = new Repository();

function allProjectsData() {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:3000/projects")
      .then((res) => {
        console.log("Project data was uploaded successfully.");
        repository.createProject(res.data);
        renderAllProjectsCards(res.data);
        resolve();
      })
      .catch((err) => {
        console.log("Project data could not be loaded");
        console.error(err);
        reject(err);
      });
  });
}

module.exports = allProjectsData;

const {
  showLoadingData,
  hideLoadingData,
} = require("./global-functions/LoadingData");

const axios = require("axios");
const renderProjects = require("./renderProjects");
const Repository = require("./Repository");
const repository = new Repository();

async function projectsData() {
  showLoadingData();
  try {
    const res = await axios.get("https://my-portfolio-backend-five-omega.vercel.app/projects");
    console.log("Project data was uploaded successfully.");
    repository.createProject(res.data);
    renderProjects(res.data);
    hideLoadingData();
  } catch (err) {
    console.log("Project data could not be loaded");
    console.error(err);
    hideLoadingData();
    throw err;
  }
}

projectsData();

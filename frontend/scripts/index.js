const {
  showLoadingData,
  hideLoadingData,
} = require("./global-functions/LoadingData");
const allProjectsData = require("./AllProjectsData");

async function loadingAllProjects() {
  showLoadingData();
  try {
    await allProjectsData();
    hideLoadingData();
  } catch (error) {
    console.error("Error loading data", error);
  }
}

loadingAllProjects();

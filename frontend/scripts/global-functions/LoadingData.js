const loading = document.createElement("div");
const loadingIcon = document.createElement("i");
const loadingTitle = document.createElement("h4");

loading.classList.add("loading");
loadingIcon.classList.add("ri-loader-4-line");
loadingTitle.classList.add("loading-title");
loadingTitle.textContent = "Loading";
const containerProjects = document.querySelector(".container-projects");

containerProjects.appendChild(loading);
loading.appendChild(loadingIcon);
loading.appendChild(loadingTitle);

function showLoadingData() {
  document.querySelector(".loading").style.display = "flex";
}

function hideLoadingData() {
  document.querySelector(".loading").style.display = "none";
}

module.exports = { showLoadingData, hideLoadingData };

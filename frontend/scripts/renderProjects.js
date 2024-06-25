function renderProjects(data) {
  function createProjectCard(projectCard) {
    //Create Elements of Project Cards
    const project = document.createElement("section");

    //Left Side
    const projectLeftSide = document.createElement("div");
    const projectTitles = document.createElement("div");
    const projectCategory = document.createElement("h4");
    const projectTitle = document.createElement("h3");
    const projectDescription = document.createElement("p");
    const projectButtons = document.createElement("div");
    const projectFrontButton = document.createElement("a");
    const projectIconFrontButton = document.createElement("i");
    const projectBackButton = document.createElement("a");
    const projectIconBackButton = document.createElement("i");
    const projectTags = document.createElement("div");

    //Right Side
    const projectRightSide = document.createElement("div");
    const projectLink = document.createElement("a");
    const projectImg = document.createElement("img");
    const projectIconImg = document.createElement("i");

    //Class Assignment
    //Left Side
    project.classList.add("project");
    projectLeftSide.classList.add("project-left-side");
    projectTitles.classList.add("project-titles");
    projectCategory.classList.add("project-category");
    projectTitle.classList.add("project-title");
    projectDescription.classList.add("project-description");
    projectButtons.classList.add("project-buttons");
    projectFrontButton.classList.add("project-front-button");
    projectIconFrontButton.classList.add("ri-github-fill");
    projectBackButton.classList.add("project-back-button");
    projectIconBackButton.classList.add("ri-github-fill");
    projectTags.classList.add("project-tags");

    //Right Side
    projectRightSide.classList.add("project-right-side");
    projectLink.classList.add("project-link");
    projectImg.classList.add("project-img");
    projectIconImg.classList.add("ri-eye-fill");
    projectIconImg.classList.add("project-icon-img");

    //Content Assignment
    projectCategory.textContent = projectCard.type;
    projectTitle.textContent = projectCard.title;
    projectDescription.textContent = projectCard.description;
    //Frontend
    projectFrontButton.textContent = "Frontend";
    projectFrontButton.href = projectCard.frontlink;
    projectFrontButton.target = "_blank";
    //Backend
    projectBackButton.textContent = "Backend";
    projectBackButton.href = projectCard.backlink;
    projectBackButton.target = "_blank";
    //Image
    projectLink.href = projectCard.linkproject;
    projectLink.target = "_blank";
    projectImg.src = projectCard.image;

    //Content organization
    //LeftSide
    project.appendChild(projectLeftSide);
    projectLeftSide.appendChild(projectTitles);
    projectTitles.appendChild(projectCategory);
    projectTitles.appendChild(projectTitle);
    projectLeftSide.appendChild(projectDescription);
    projectLeftSide.appendChild(projectButtons);
    projectButtons.appendChild(projectFrontButton);
    projectFrontButton.appendChild(projectIconFrontButton);
    projectButtons.appendChild(projectBackButton);
    projectBackButton.appendChild(projectIconBackButton);
    //Check if the array is empty, separate the objects from the array and send them to their container (divTagsProjectLeftSide)
    if (projectCard.tags.length === 0) {
    } else {
      projectCard.tags.forEach((tag) => {
        const projectTag = document.createElement("span");
        projectTag.textContent = tag;
        projectTags.appendChild(projectTag);
        projectLeftSide.appendChild(projectTags);
      });
    }

    //Right Side
    project.appendChild(projectRightSide);
    projectRightSide.appendChild(projectLink);
    projectLink.appendChild(projectImg);
    projectLink.appendChild(projectIconImg);

    //Return All Content
    return project;
  }

  const containerProjects = document.querySelector(".container-projects");
  const projects = document.createElement("section");
  projects.classList.add("projects");
  const projectsCards = data.map((projectCard) => createProjectCard(projectCard));
  projectsCards.forEach((projectCard) => {
    projects.appendChild(projectCard);
  });
  containerProjects.appendChild(projects);
}

module.exports = renderProjects;

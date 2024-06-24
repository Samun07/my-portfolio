function handleNavItemClick(navProjectCategory) {
  const projectsNavCategory = document.querySelectorAll(
    ".projects-nav-category"
  );
  projectsNavCategory.forEach((navProjectCategoryActive) =>
    navProjectCategoryActive.classList.remove("projects-nav-category-active")
  );
  navProjectCategory.classList.add("projects-nav-category-active");
}

function filterFeaturedProjects(projectNavCategory) {
  const projects = document.querySelectorAll(".projects .project");
  projects.forEach((project) => {
    const projectCategory = project
      .querySelector(".project-category")
      .textContent.trim();
    if (
      projectNavCategory === "All" ||
      projectNavCategory === projectCategory
    ) {
      project.style.display = "grid";
    } else {
      project.style.display = "none";
    }
  });
}

function featuredProjectsFilter() {
  const projectsNavCategory = document.querySelectorAll(
    ".projects-nav-category"
  );
  projectsNavCategory.forEach((navProjectCategory) => {
    navProjectCategory.addEventListener("click", () => {
      const projects = document.querySelectorAll(".projects .project");
      projects.forEach((project) => {
        project.style.display = "none";
      });
      const projectNavCategory = navProjectCategory.textContent.trim();
      handleNavItemClick(navProjectCategory);
      filterFeaturedProjects(projectNavCategory);
    });
  });
}

featuredProjectsFilter();

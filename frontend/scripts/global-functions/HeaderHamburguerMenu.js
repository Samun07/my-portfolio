const buttonHamburguerMenu = document.querySelector(".hamburguer-menu");

function showHeaderNavegation() {
  const iconHamburguerMenu = document.querySelector(".hamburguer-menu i");
  const headerNavegation = document.querySelector(".header-navegation");

  // If the menu is closed, open it
  if (iconHamburguerMenu.classList.contains("ri-menu-line")) {
    iconHamburguerMenu.classList.remove("ri-menu-line");
    iconHamburguerMenu.classList.add("ri-close-line");
    headerNavegation.style.height = "100%";
  }
  // If the menu is open, close it
  else if (iconHamburguerMenu.classList.contains("ri-close-line")) {
    iconHamburguerMenu.classList.remove("ri-close-line");
    iconHamburguerMenu.classList.add("ri-menu-line");
    headerNavegation.style.height = "0";
  }
}

buttonHamburguerMenu.addEventListener("click", () => {
  showHeaderNavegation();
});

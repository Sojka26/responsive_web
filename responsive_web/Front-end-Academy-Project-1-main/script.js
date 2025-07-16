document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("navigation-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("visible");
  });
});

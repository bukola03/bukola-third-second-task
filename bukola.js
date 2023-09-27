const hamburgerBtn = document.querySelector(".hamburger-btn");
const menuContainer = document.querySelector(".menu-container");

hamburgerBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("show-menu");
  console.log("clicked");
});

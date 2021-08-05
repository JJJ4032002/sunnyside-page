const hamBurgerMenu = document.querySelector(".hamburger-menu");

hamBurgerMenu.addEventListener("click", ControlNav);
let check = false;
function ControlNav() {
  const mobileNav = document.querySelector(".desktop-links");
  if (!check) {
    mobileNav.classList.add("open");
    check = true;
  } else {
    mobileNav.classList.remove("open");
    check = false;
  }
}

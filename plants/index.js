let hamb = document.querySelector(".hamb");
let navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
let navOverlay = document.querySelector(".navbar-overlay")

hamb.addEventListener("click", mobileMenu);
function mobileMenu() {
	hamb.classList.toggle("active");
	navMenu.classList.toggle("active");
	navOverlay.classList.toggle("active");
}
navLink.forEach(n => n.addEventListener("click", closeMenu));
navOverlay.addEventListener("click", closeMenu);
function closeMenu() {
	hamb.classList.remove("active");
	navMenu.classList.remove("active");
	navOverlay.classList.remove("active");
}

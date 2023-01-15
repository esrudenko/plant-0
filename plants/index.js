/*function burgerMenu(selector) {
let menu = $(selector);
let button = menu.find('.burger-menu-btn');
let links = menu.find('.burger-menu-link');
let overlay = menu.find('.burger-menu-overlay');

button.on('click', (e) => {
	e.preventDefault();
	toggleMenu();
});

links.on('click', () => toggleMenu());
overlay.on('click', () => toggleMenu());

function toggleMenu() {
menu.toggleClass('.burger-menu-active')
if (menu.hasClass('.burger-menu-active')) {
	$('body').css('overflow', 'hidden');
} else {
	$('body').css('overflow', 'visible');
}
}
}
burgerMenu('.burger-menu');

*/

  let hamb = document.querySelector(".hamb");
  let navMenu = document.querySelector(".nav-menu");
  const navLink = document.querySelectorAll(".nav-link");
  let navOverlay = document.querySelector(".navbar-overlay")

  hamb.addEventListener("click", mobileMenu);
  function mobileMenu() {
	hamb.classList.toggle("active");
	navMenu.classList.toggle("active");
  }
 navLink.forEach(n => n.addEventListener("click", closeMenu));
 navOverlay.addEventListener("click", closeMenu);
 function closeMenu() {
	hamb.classList.remove("active");
	navMenu.classList.remove("active");

 }

let menuEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let burguerMenu = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
}


let menuEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
    console.log("click");
    desktopMenu.classList.toggle("inactive");
}

console.log("hOLA")


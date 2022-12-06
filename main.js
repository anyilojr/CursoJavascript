let menuEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let burguerMenu = document.querySelector(".menu");
let menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
let mobileMenu = document.querySelector(".mobile-menu");
let aside = document.querySelector(".product-detail")

menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside)

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains("inactive");

    if(!isAsideClosed){
        aside.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains("inactive");

    if (!isAsideClosed){
        aside.classList.add("inactive");
    }
    
    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside(){
    const isMobileMenuClosed= mobileMenu.classList.contains("inactive");

    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive")
    }
    aside.classList.toggle("inactive");
}


const menuTab = document.querySelector(".menu-tab");
const menuButton = document.querySelector(".menu-button");
const buttonLine = document.querySelector(".button-line");
const navMenu = document.querySelector(".nav-menu");
const menuList = document.querySelector(".menu-list");
const menuItem = document.querySelectorAll(".menu-item");

let menuVisible = false;

menuTab.addEventListener("click", toggleMenuVisible);

function toggleMenuVisible() {
    if (!menuVisible) {
        menuTab.classList.add("close");
        menuButton.classList.add("close");
        navMenu.classList.add("visible");
        menuList.classList.add("visible");
        menuItem.forEach(item => item.classList.add("visible"));

        menuVisible = true;
    } else {
        menuTab.classList.remove("close");
        menuButton.classList.remove("close");
        navMenu.classList.remove("visible");
        menuList.classList.remove("visible");
        menuItem.forEach(item => item.classList.remove("visible"));

        menuVisible = false;
    }
}
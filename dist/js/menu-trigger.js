const menuTab = document.querySelector(".menu-tab");
const menuButton = document.querySelector(".menu-button");
const buttonLines = document.querySelectorAll(".button-line");
const navMenu = document.querySelector(".nav-menu");
const menuList = document.querySelector(".menu-list");
const menuItems = document.querySelectorAll(".menu-item");

let menuVisible = false;

menuTab.addEventListener("click", toggleMenuVisible);

function toggleMenuVisible() {
    if (!menuVisible) {
        menuTab.classList.add("close");
        // menuButton.classList.add("close");
        // buttonLines.forEach(item => item.classList.add("close"));
        navMenu.classList.add("visible");
        menuList.classList.add("visible");
        menuItems.forEach(item => item.classList.add("visible"));

        menuVisible = true;
    } else {
        menuTab.classList.remove("close");
        // menuButton.classList.remove("close");
        // buttonLines.forEach(item => item.classList.remove("close"));
        navMenu.classList.remove("visible");
        menuList.classList.remove("visible");
        menuItems.forEach(item => item.classList.remove("visible"));
        // resetMenuItemPositions();

        menuVisible = false;
    }
}

function resetMenuItemPositions() {
    var i = 0;
    for (var [index, item] in menuItems.entries()) {
        if (item % 2 == 0) {
            item.style.transform = "translate3d(0, 800px, 0)";
        } else {
            item.style.transform = "translate3d(0, -800px, 0)";
        }
    }
}
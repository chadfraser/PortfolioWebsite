const menuTab = document.querySelector(".menu-tab");
const menuButton = document.querySelector(".menu-button");
const buttonLines = document.querySelectorAll(".button-line");
const navMenu = document.querySelector(".nav-menu");
const menuList = document.querySelector(".menu-list");
const menuItems = document.querySelectorAll(".menu-item");
const menuIcon = document.querySelector(".menu-icons");
const menuLinkIcons = document.querySelectorAll(".menu-link-icon");

let menuVisible = false;

menuTab.addEventListener("click", toggleMenuVisible);

function toggleMenuVisible() {
    if (!menuVisible) {
        menuTab.classList.add("close");

        // This code forces the tab to briefly 'forget' that the cursor was hovering over it as it translates to the
        // left, ensuring that the hover effect does not continue despite the tab no longer being under the cursor
        // after its translation.
        menuTab.style["pointerEvents"] = "none";
        setTimeout(function(){
            menuTab.style["pointerEvents"] = "auto";
        }, 100);

        navMenu.classList.add("visible");
        menuList.classList.add("visible");
        menuItems.forEach(item => item.classList.add("visible"));
        menuIcon.classList.add("visible");
        menuLinkIcons.forEach(item => item.classList.add("visible"));

        menuVisible = true;
    } else {
        menuTab.classList.remove("close");
        navMenu.classList.remove("visible");
        menuList.classList.remove("visible");
        menuItems.forEach(item => item.classList.remove("visible"));
        menuIcon.classList.remove("visible");
        menuLinkIcons.forEach(item => item.classList.remove("visible"));

        menuVisible = false;
    }
}
const menuTab = document.querySelector(".menu-tab");
const navMenu = document.querySelector(".nav-menu");
const menuList = document.querySelector(".menu-list");
const menuItems = document.querySelectorAll(".menu-item");
const menuIcon = document.querySelector(".menu-icons");
const menuLinkIcons = document.querySelectorAll(".menu-link-icon");

let menuVisible = false;

document.body.addEventListener("click", function() {
    closeNavMenu();
});

menuTab.addEventListener("click", function(event) {
    toggleNavMenuVisible();
    event.stopPropagation();
});

navMenu.addEventListener("click", function(event) {
    event.stopPropagation();
});


function toggleNavMenuVisible() {
    if (!menuVisible) {
        openNavMenu();
    } else {
        closeNavMenu();
    }
}

function openNavMenu() {
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
}

function closeNavMenu() {
    menuTab.classList.remove("close");
    navMenu.classList.remove("visible");
    menuList.classList.remove("visible");
    menuItems.forEach(item => item.classList.remove("visible"));
    menuIcon.classList.remove("visible");
    menuLinkIcons.forEach(item => item.classList.remove("visible"));

    menuVisible = false;
}
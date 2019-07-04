var menuHtml = "<div class='settings-tab'> \
        <p>THEME</p> \
        <img src='img/iconmonstr-gear-opaque.png' class='settings-icon'> \
    </div> \
    <div class='settings-menu'> \
        <ul class='settings-list'> \
            <li class='settings-item' id='theme--bright'>BRIGHT</li> \
            <li class='settings-item' id='theme--calm'>CALM</li> \
            <li class='settings-item' id='theme--bold'>BOLD</li> \
            <li class='settings-item' id='theme--somber'>SOMBER</li> \
            <li class='settings-item' id='theme--ambient'>AMBIENT</li> \
        </ul> \
    </div> \
    <div class='menu-tab'> \
        <div class='menu-button'> \
            <div class='button-line-container'> \
                <div class='button-line'></div> \
            </div> \
            <div class='button-line-container'> \
                <div class='button-line'></div> \
            </div> \
            <div class='button-line-container'> \
                <div class='button-line'></div> \
            </div> \
        </div> \
    </div> \
    <nav class='nav-menu'> \
        <ul class='menu-list'> \
            <li class='menu-item'> \
                <a href='./index.html' class='menu-link'>Home</a> \
            </li> \
            <li class='menu-item'> \
                <a href='./about.html' class='menu-link'>About Me</a> \
            </li> \
            <li class='menu-item'> \
                <a href='./projects.html' class='menu-link'>My Projects</a> \
            </li> \
            <li class='menu-item'> \
                <a href='./contact.html' class='menu-link'>Contact Me</a> \
            </li> \
        </ul> \
    </nav> \
    <div class='menu-icons'> \
        <div class='menu-link-icon'> \
            <a href='https://github.com/chadfraser/' class='icon-anchor'> \
                <img src='img/iconmonstr-github-opaque.png' alt='' class='link-image menu-link-image github-image'> \
            </a> \
        </div> \
        <div class='menu-link-icon'> \
            <a href='https://www.linkedin.com/in/chad-fraser' class='icon-anchor'> \
                <img src='img/iconmonstr-linkedin-opaque.png' alt='' class='link-image menu-link-image linked-in-image'> \
            </a> \
        </div> \
        <div class='menu-link-icon'> \
            <a href='https://www.facebook.com/1up20x6' class='icon-anchor'> \
                <img src='img/iconmonstr-facebook-opaque.png' alt='' class='link-image menu-link-image facebook-image'> \
            </a> \
        </div> \
    </div>";
document.getElementById("menu-header").innerHTML = menuHtml;


function isInternetExplorer() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');

    return (msie > 0 || trident > 0);
}

if (isInternetExplorer()) {
    document.body.innerHTML = "<div class='block-ie'> \
        <h1>I'm very sorry, but Internet Explorer is not currently supported on this portfolio.</h1> \
        <br> <br> \
        <p>Internet Explorer is not up-to-date with many Javascript or CSS functionalities, so all of the aesthetic \
        design and useful properties of this portfolio (like my collapsing navigation menu) won't work in their \
        current state on Internet Explorer. \
        <br> <br> \
        I could rewrite all of my Javascript and CSS files to target IE effectively and work around its \
        limitations, but this would bloat my files and make the code harder to read, harder to debug, and generally \
        harder to maintain. Rather than risk breaking everything like that, I think it's best that I just ask you to \
        not try to view this portfolio on Internet Explorer. That way, I can ensure every viewer gets the \
        properly-tailored experience that I designed. \
        <br> <br> <br> \
        Consider using a different browser with better support for modern Javascript and CSS capabilties, like \
        <a href='http://firefox.com'>Firefox</a>, <a href='https://www.google.com/chrome/'>Google Chrome</a>, \
        <a href='https://microsoft-edge.en.softonic.com/download'>Microsoft Edge</a>, or \
        <a href='https://www.opera.com/download'>Opera</a> instead. \
        <p> \
    </div>";
}

const settingsItems = document.querySelectorAll(".settings-item");
settingsItems.forEach(item => item.addEventListener("click", function() { changeTheme(item); }));

window.onload = function() {
    setInitialTheme();
    updateAllElementThemeClasses();
}

function setInitialTheme() {
    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "theme--bold");
    }
}

function changeTheme(item) {
    localStorage.setItem("theme", item.id);
    updateAllElementThemeClasses();
}

function updateAllElementThemeClasses() {
    var allElements = document.body.getElementsByTagName("*");
    for (var i = 0; i < allElements.length; i++) {
        removePreviousThemeClass(allElements[i]);
        addCurrentThemeClass(allElements[i]);
    }
    removePreviousThemeClass(document.body);
    addCurrentThemeClass(document.body);
}

function removePreviousThemeClass(elem) {
    elem.classList.forEach(className => {
        if (className.startsWith("theme--")) {
            elem.classList.remove(className);
        }
    });
}

function addCurrentThemeClass(elem) {
    elem.classList.add(localStorage.getItem("theme"));
}

window.addEventListener("resize", endAllTransitions);

function endAllTransitions() {
    document.body.classList.add("end-transition");

    setTimeout(function(){
        document.body.classList.remove("end-transition");
    }, 100);
}

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

const settingsTab = document.querySelector(".settings-tab");
const settingsIcon = document.querySelector(".settings-icon");
const settingsMenu = document.querySelector(".settings-menu");
const settingsList = document.querySelector(".settings-list");

let settingsVisible = false;

document.body.addEventListener("click", function() {
    closeSettings();
});

settingsTab.addEventListener("click", function(event) {
    toggleSettingsVisible();
    event.stopPropagation();
});

function toggleSettingsVisible() {
    if (!settingsVisible) {
        openSettings();
    } else {
        closeSettings();
    }
}

function openSettings() {
    settingsIcon.src = "img/iconmonstr-x-mark-opaque.png";

    settingsTab.classList.add("close");
    settingsIcon.classList.add("visible");
    settingsMenu.classList.add("visible");
    settingsList.classList.add("visible");
    settingsItems.forEach(item => item.classList.add("visible"));

    settingsVisible = true;
}

function closeSettings() {
    settingsIcon.src = "img/iconmonstr-gear-opaque.png";
    settingsTab.classList.remove("close");
    settingsIcon.classList.remove("visible");
    settingsMenu.classList.remove("visible");
    settingsList.classList.remove("visible");
    settingsItems.forEach(item => item.classList.remove("visible"));

    settingsVisible = false;
}


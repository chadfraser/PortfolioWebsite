const settingsTab = document.querySelector(".settings-tab");
const settingsIcon = document.querySelector(".settings-icon");
const settingsMenu = document.querySelector(".settings-menu");
const settingsList = document.querySelector(".settings-list");
const settingsItems = document.querySelectorAll(".settings-item");

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
    settingsTab.classList.add("close");
    settingsIcon.classList.add("visible");
    settingsMenu.classList.add("visible");
    settingsList.classList.add("visible");
    settingsItems.forEach(item => item.classList.add("visible"));

    settingsVisible = true;
}

function closeSettings() {
    settingsTab.classList.remove("close");
    settingsIcon.classList.remove("visible");
    settingsMenu.classList.remove("visible");
    settingsList.classList.remove("visible");
    settingsItems.forEach(item => item.classList.remove("visible"));

    settingsVisible = false;
}
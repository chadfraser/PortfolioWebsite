const settingsTab = document.querySelector(".settings-tab");
const settingsIcon = document.querySelector(".settings-icon");
const settingsMenu = document.querySelector(".settings-menu");
const settingsList = document.querySelector(".settings-list");
const settingsItems = document.querySelectorAll(".settings-item");

let settingsVisible = false;

settingsTab.addEventListener("click", toggleSettingsVisible);

function toggleSettingsVisible() {
    console.log(2);
    if (!settingsVisible) {
        settingsTab.classList.add("close");

        // // This code forces the tab to briefly 'forget' that the cursor was hovering over it as it translates to the
        // // left, ensuring that the hover effect does not continue despite the tab no longer being under the cursor
        // // after its translation.
        // menuTab.style["pointerEvents"] = "none";
        // setTimeout(function(){
        //     menuTab.style["pointerEvents"] = "auto";
        // }, 100);

        settingsIcon.classList.add("visible");
        settingsMenu.classList.add("visible");
        settingsList.classList.add("visible");
        settingsItems.forEach(item => item.classList.add("visible"));

        settingsVisible = true;
    } else {
        settingsTab.classList.remove("close");
        settingsIcon.classList.remove("visible");
        settingsMenu.classList.remove("visible");
        settingsList.classList.remove("visible");
        settingsItems.forEach(item => item.classList.remove("visible"));

        settingsVisible = false;
    }
}
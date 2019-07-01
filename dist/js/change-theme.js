settingsItems.forEach(item => item.addEventListener("click", function() { changeTheme(item); }));

var prev_handler = window.onload;
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
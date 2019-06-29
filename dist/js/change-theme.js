settingsItems.forEach(item => item.addEventListener("click", function() { changeTheme(item); }));

window.onload = updateAllElementThemeClasses;

function changeTheme(item) {
    localStorage.setItem("theme", item.id);
    console.log(localStorage);
    updateAllElementThemeClasses();
}

function updateAllElementThemeClasses() {
    console.log("AAA", localStorage);
    var allElements = document.body.getElementsByTagName("*");
    for (var i = 0; i < allElements.length; i++) {
        removePreviousThemeClass(allElements[i]);
        addCurrentThemeClass(allElements[i]);
    }
    removePreviousThemeClass(document.body);
    addCurrentThemeClass(document.body);
    console.log(localStorage);
    console.log(allElements);
}

function removePreviousThemeClass(elem) {
    // console.log(elem.classList);
    elem.classList.forEach(className => {
        if (className.startsWith("theme--")) {
            elem.classList.remove(className);
        }
    });
    // console.log(elem.classList);
}

function addCurrentThemeClass(elem) {
    elem.classList.add(localStorage.getItem("theme"));
}
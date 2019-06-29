settingsItems.forEach(item => item.addEventListener("click", function() { changeTheme(item) }));

console.log(localStorage);

function changeTheme(item) {
    localStorage.setItem("theme", item.id);
    console.log(localStorage);
}
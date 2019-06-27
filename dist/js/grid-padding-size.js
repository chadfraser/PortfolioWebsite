var window = document;
var grid = document.querySelector(".about-me-image-grid");
var relativePopup = document.querySelector(".relative-popup");

window.addEventListener("click", addPadding);
window.addEventListener("resize", addPadding);

function addPadding() {
    var gridRect = grid.getBoundingClientRect();
    var popupRect = relativePopup.getBoundingClientRect();
    
    if (popupRect.bottom > gridRect.bottom) {
        relativePopup.style.padding = "0 0 20px 0";
    } else {
        relativePopup.style.padding = "0";
    }
}
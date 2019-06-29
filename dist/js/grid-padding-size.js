var grid = document.querySelector(".about-me-image-grid");
var popupContainer = document.querySelector(".popup-absolute-container");

window.addEventListener("click", addPadding);
window.addEventListener("resize", addPadding);

// Adds padding only when the window is resized or clicked, since those are the cases when the popup container
// could extend to the bottom of the screen.
function addPadding() {
    var gridRect = grid.getBoundingClientRect();
    var popupRect = popupContainer.getBoundingClientRect();
    
    if (popupRect.bottom > gridRect.bottom) {
        popupContainer.style.padding = "0 0 20px 0";
    } 
    else {
        popupContainer.style.padding = "0";
    }
}
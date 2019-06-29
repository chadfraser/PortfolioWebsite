const identityImages = document.querySelectorAll(".identity-image");
const aboutPopups = document.querySelectorAll(".about-popup");
var copyImage = document.querySelector("#copy-image");
var popupContainer = document.querySelector(".popup-absolute-container");

identityImages.forEach(function (image, index) { 
    var text = aboutPopups[index];
    image.addEventListener("click", function() { popupText(text, image) });
});

aboutPopups.forEach(function (text) {
    text.addEventListener("click", closeAllTextPopups);
});

function popupText(text, image) {
    closeAllTextPopups();
    image.classList.add("open-image");
    text.classList.add("visible");
    popupContainer.classList.add("visible");
    copyImage.src = image.src;
    positionCopyImage(text);
    copyImage.classList.add("visible");
}

function closeAllTextPopups() {
    copyImage.classList.remove("visible");
    popupContainer.classList.remove("visible");
    aboutPopups.forEach(function (text) {
        text.classList.remove("visible");
    });
    identityImages.forEach(function (image) {
        image.classList.remove("open-image");
    });
}

function positionCopyImage(divToMoveTo) {
    var outerDiv = copyImage.parentElement;
    divToMoveTo.insertBefore(outerDiv.removeChild(copyImage), divToMoveTo.firstChild);
}
const identityImages = document.querySelectorAll(".identity-image");
const aboutPopups = document.querySelectorAll(".about-popup");
var copyImage = document.querySelector("#copy-image");
var relativePopup = document.querySelector(".relative-popup");

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
    relativePopup.classList.add("visible");
    copyImage.src = image.src;
    moveCopyImage(text);
    copyImage.classList.add("visible");
}

function closeAllTextPopups() {
    copyImage.classList.remove("visible");
    relativePopup.classList.remove("visible");
    aboutPopups.forEach(function (text) {
        text.classList.remove("visible");
    });
    identityImages.forEach(function (image) {
        image.classList.remove("open-image");
    });
}

function moveCopyImage(divToMoveTo) {
    var outerDiv = copyImage.parentElement;
    divToMoveTo.insertBefore(outerDiv.removeChild(copyImage), divToMoveTo.firstChild.nextSibling);
}
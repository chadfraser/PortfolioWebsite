identityImages.forEach(function (image, index) { 
    image.addEventListener("click", function() { positionPopup(index) });
});

window.addEventListener("resize", function() { 
    var currentActiveImage = this.document.querySelector(".open-image");
    var currentActiveImageIndex = Array.from(identityImages).indexOf(currentActiveImage);
    positionPopup(currentActiveImageIndex);
});

function positionPopup(index) {
    // If the window is wider than small screen sizes, reset the popup container's top position to its default value
    if (window.innerWidth > 500) {
        popupContainer.style.top = `${5}%`;
        return;
    }

    var heightSum = 0;

    // The popup container's height should be inline with the height of the clicked image
    // Each image is 5vh apart from the next
    Array.from(identityImages).slice(0, index).forEach(item => heightSum += item.offsetHeight);
    var vhEquivalent = document.documentElement.clientHeight / 100;
    heightSum += 5 * vhEquivalent * Math.max(0, index - 1);

    var gridHeight = grid.clientHeight;
    var percentTop = heightSum / gridHeight * 100;
    popupContainer.style.top = `${percentTop}%`;
}

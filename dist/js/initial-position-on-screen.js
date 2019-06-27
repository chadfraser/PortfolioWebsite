var defaultLeft = relativePopup.getBoundingClientRect().left;
var defaultTop = relativePopup.getBoundingClientRect().top;

identityImages.forEach(function (image, index) { 
    image.addEventListener("click", function() { positionPopup(index) });
});
window.addEventListener("resize", function() { 
    var currentActiveImage = this.document.querySelector(".open-image");
    var currentActiveImageIndex = Array.from(identityImages).indexOf(currentActiveImage);
    positionPopup(currentActiveImageIndex);
});

function positionPopup(index) {
    if (window.innerWidth > 500) {
        console.log("AAA");
        relativePopup.style.top = `${5}%`;
        return;
    }

    var heightSum = 0;

    Array.from(identityImages).slice(0, index).forEach(item => heightSum += item.offsetHeight);
    // heightSum += identityImages.item(index).height / 2;
    // console.log(heightSum);

    // relativePopup.style.top = `${window.pageXOffset - 98 * vwEquivalent}px`;
    var vhEquivalent = document.documentElement.clientHeight / 100;
    // console.log("VH", vhEquivalent);
    heightSum += 5 * vhEquivalent * Math.max(0, index - 1);
    // console.log(heightSum);

    var gridHeight = grid.clientHeight;
    // console.log(grid, gridHeight);
    var percentTop = heightSum / gridHeight * 100;
    // console.log(percentTop);
    relativePopup.style.top = `${percentTop}%`;
    // console.log(relativePopup.style.top);
    // console.log();

    // var gridRect = grid.getBoundingClientRect();
    // console.log("GRL", gridRect.left);
    // console.log("GRT", gridRect.top);

    // var vwEquivalent = document.documentElement.clientWidth / 100;
    // var a = window.pageYOffset + 2 * vhEquivalent;
    // // relativePopup.style.top = `${window.pageYOffset + 2 * vhEquivalent}px`;
    // relativePopup.style.left = `${window.pageXOffset - gridRect.left + 2 * vwEquivalent}px`;
    // // relativePopup.style.top = `${window.pageYOffset - 80 * vhEquivalent}px`;
    // relativePopup.style.top = `${window.pageYOffset - gridRect.top + 2 * vwEquivalent}px`;
    // // relativePopup.style.left = `${window.pageXOffset - 98 * vwEquivalent}px`;
    // console.log("VH", vhEquivalent);
    // console.log("VW", vwEquivalent);
    // console.log("YOFF", window.pageYOffset);
    // console.log("XOFF", window.pageXOffset);
    // console.log(a);
    // console.log("RL", relativePopup.style.left);
    // console.log("RT", relativePopup.style.top);

    // console.log();
    // console.log("BT", relativePopup.getBoundingClientRect().bottom, "TP", relativePopup.getBoundingClientRect().bottom);
    // console.log(relativePopup.getBoundingClientRect().bottom - relativePopup.getBoundingClientRect().top);
    // // text.style.left = document.pageXOffset + 2 * vwEquivalent;
    // // relativePopup.classList.add("visible");
}

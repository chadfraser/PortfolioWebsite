const initialContactTexts = document.querySelectorAll(".contact-initial");
const secondaryContactTexts = document.querySelectorAll(".contact-secondary");

window.addEventListener("resize", setTextSpacing);

var prev_handler = window.onload;
window.onload = function () {
    if (prev_handler) {
        prev_handler();
    }
    setTextSpacing();
};

function setTextSpacing() {
    var maxTextWidth = 0;
    var vwEquivalent = document.documentElement.clientWidth / 100;

    // The left side of all secondary texts start at a point 2vw past the right edge of the longest initial text
    initialContactTexts.forEach(item => maxTextWidth = Math.max(maxTextWidth, item.clientWidth));
    secondaryContactTexts.forEach(function(item, index) {
        item.style.left = `${maxTextWidth - initialContactTexts[index].clientWidth + 2 * vwEquivalent}px`
    });
}


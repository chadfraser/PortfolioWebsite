const selfImage = document.querySelector(".self-image");
const linkIconsDiv = document.querySelector(".link-icons");

window.addEventListener("resize", alignIconDiv);

var prev_handler = window.onload;
window.onload = function () {
    if (prev_handler) {
        prev_handler();
    }
    alignIconDiv();
};

function alignIconDiv() {
    var leftEdge = selfImage.getBoundingClientRect().left;
    var rightEdge = selfImage.getBoundingClientRect().right;
    var vhEquivalent = document.documentElement.clientHeight / 100;
    linkIconsDiv.style.left = `${Math.max(0, leftEdge - 8 * vhEquivalent)}px`;
    linkIconsDiv.style.width = `${rightEdge - leftEdge + 16 * vhEquivalent}px`;
}
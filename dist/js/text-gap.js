const initialContactTexts = document.querySelectorAll(".contact-initial");
const secondaryContactTexts = document.querySelectorAll(".contact-secondary");

// initialContactTexts.forEach(function (image, index) { 
//     var text = secondaryContactTexts[index];
//     image.addEventListener("click", function() { popupText(text, image) });
// });

window.addEventListener("resize", setTextSpacing);
window.onload = setTextSpacing;

function setTextSpacing() {
    var maxTextWidth = 0;
    var leftEdge = initialContactTexts[0].getBoundingClientRect().left;
    var vwEquivalent = document.documentElement.clientWidth / 100;

    initialContactTexts.forEach(item => maxTextWidth = Math.max(maxTextWidth, item.clientWidth));
    console.log(maxTextWidth, leftEdge);
    // secondaryContactTexts.forEach(item => console.log("F", item.getBoundingClientRect().left));
    // secondaryContactTexts.forEach(item => console.log("F", item.getBoundingClientRect().left));
    // secondaryContactTexts.forEach(item => item.style.left = `${leftEdge + maxTextWidth + 2 * vwEquivalent}px`);
    // secondaryContactTexts.forEach(item => item.style.left = `${item.getBoundingClientRect().left + 2 * vwEquivalent}px`);
    secondaryContactTexts.forEach(function(item, index) {
        item.style.left = `${maxTextWidth - initialContactTexts[index].clientWidth + 2 * vwEquivalent}px`
    });
    // console.log(item.getBoundingClientRect().left, leftEdge);
    // secondaryContactTexts.forEach(item => console.log("F", item.getBoundingClientRect().left));
    //     secondaryContactTexts[index].style.left = 
    //     // item.style.left = 0
    // });
}


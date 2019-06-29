const projectSamples = document.querySelectorAll(".project-sample");
const projectImages = document.querySelectorAll(".project-image");
const projectAnimations = document.querySelectorAll(".project-animation");
var imageSourceList = [];

projectSamples.forEach(function (sample, index) { 
    var image = projectImages[index];
    var animation = projectAnimations[index];
    sample.addEventListener("mouseenter", function() { showAnimation(index) });
    sample.addEventListener("mouseleave", function() { hideAnimation(index) });
    imageSourceList.push([image.src, animation.src]);
});

function showAnimation(index) {
    projectImages[index].src = imageSourceList[index][1];
}

function hideAnimation(index) {
    projectImages[index].src = imageSourceList[index][0];
}
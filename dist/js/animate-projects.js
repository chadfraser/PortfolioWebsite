const projectSamples = document.querySelectorAll(".project-sample");
const projectImages = document.querySelectorAll(".project-image");
const projectAnimations = document.querySelectorAll(".project-animation");

projectSamples.forEach(function (sample, index) { 
    var image = projectImages[index];
    var animation = projectAnimations[index];
    sample.addEventListener("mouseenter", function() { showAnimation(image, animation) });
    sample.addEventListener("mouseleave", function() { hideAnimation(image, animation) });
});

function showAnimation(image, animation) {
    image.classList.remove("visible");
    animation.classList.add("visible");
}

function hideAnimation(image, animation) {
    image.classList.add("visible");
    animation.classList.remove("visible");
}
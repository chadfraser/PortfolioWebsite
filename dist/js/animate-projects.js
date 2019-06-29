const projectSamples = document.querySelectorAll(".project-sample");
const projectImages = [];
const imageSourceList = [];

projectSamples.forEach(function (sample, index) { 
    var image = sample.querySelector(".project-image");
    var animation = sample.querySelector(".project-animation");
    imageSourceList.push([image.src, animation.src]);
    projectImages.push(image);

    sample.addEventListener("mouseenter", function() { showAnimation(index) });
    sample.addEventListener("mouseleave", function() { showStaticImage(index) });
});

function showAnimation(index) {
    projectImages[index].src = imageSourceList[index][1];
}

function showStaticImage(index) {
    projectImages[index].src = imageSourceList[index][0];
}
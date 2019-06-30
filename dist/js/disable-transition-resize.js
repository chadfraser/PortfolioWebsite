window.addEventListener("resize", endAllTransitions);

function endAllTransitions() {
    document.body.classList.add("end-transition");

    setTimeout(function(){
        document.body.classList.remove("end-transition");
    }, 100);
}
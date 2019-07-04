var userAgent = window.navigator.userAgent;

if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
    window.addEventListener("resize", debounceVhEquivalent);

    window.onresize();
}

function setVhEquivalent() {
    let vhEquivalent = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vhEquivalent}px`);
}

function debounceFunction(subFunction, waitingTime, runImmediately) {
    var timeout;

    return function executedFunction() {
        var context = this;
        var args = arguments;
        var later = function() {
            timeout = null;
            if (!runImmediately) {
                subFunction.apply(context, args);
            }
        }

        var callNow = runImmediately && !timeout;

        clearTimeout(timeout);
        timeout = setTimeout(later, waitingTime);
        if (callNow) {
            subFunction.apply(context, args);
        }
    }
}

function debounceVhEquivalent() {
    debounceFunction(setVhEquivalent, 250);
}
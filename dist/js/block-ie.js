function isInternetExplorer() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');

    return (msie > 0 || trident > 0);
}

if (isInternetExplorer()) {
    document.body.innerHTML = "<div class='block-ie'> \
        <h1>I'm very sorry, but Internet Explorer is not currently supported on this portfolio.</h1> \
        <br> <br> \
        <p>Internet Explorer is not up-to-date with many Javascript or CSS functionalities, so all of the aesthetic \
        design and useful properties of this portfolio (like my collapsing navigation menu) won't work in their \
        current state on Internet Explorer. \
        <br> <br> \
        I could rewrite all of my Javascript and CSS files to target IE effectively and work around its \
        limitations, but this would bloat my files and make the code harder to read, harder to debug, and generally \
        harder to maintain. Rather than risk breaking everything like that, I think it's best that I just ask you to \
        not try to view this portfolio on Internet Explorer. That way, I can ensure every viewer gets the \
        properly-tailored experience that I designed. \
        <br> <br> <br> \
        Consider using a different browser with better support for modern Javascript and CSS capabilties, like \
        <a href='http://firefox.com'>Firefox</a>, <a href='https://www.google.com/chrome/'>Google Chrome</a>, \
        <a href='https://microsoft-edge.en.softonic.com/download'>Microsoft Edge</a>, or \
        <a href='https://www.opera.com/download'>Opera</a> instead. \
        <p> \
    </div>";
}

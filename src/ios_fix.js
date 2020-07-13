$(document).ready(function() {

    // Mobile safari presents an annoying issue where the screen initially starts
    // lower down than you'd expect with respect to viewport dimensions.  Apple
    // has decided that this is the way it's going to be because Safari looking
    // good is more important than adherence to web conventions...  So here's a
    // slightly hacky fix inspired by a post I read on Stackoverflow many years ago.
    var ua = window.navigator.userAgent;
    var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    var webkit = !!ua.match(/WebKit/i);
    var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
    
    if (iOSSafari) {
        $('#more').css({top: 'calc(100vh - 100px)'});
    }
})
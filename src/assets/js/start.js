$(function () {
    barnFirstScreen();

    $('a[data-fancybox]').fancybox({
        closeBtn: false,
        backFocus: false,
        arrows: true,
        keyboard: true,
        nextClick: true,
        infobar: true,
        protect: true,
        nextEffect: 'elastic',
        prevEffect: 'elastic',
        padding: 0,
        loop: true,
        animationEffect: "zoom-in-out",
        transitionEffect: "slide",
        touch: {
            vertical: true, // Allow to drag content vertically
            momentum: true // Continue movement after releasing mouse/touch when panning
        }
    });
});
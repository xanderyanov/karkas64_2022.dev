function barnFirstScreen() {
    var headerHeight = $(".site__header").outerHeight();
    $('.bh__first').css({
        height: windowHeight - headerHeight
    });
}
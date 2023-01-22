function barnFirstScreen() {
	var headerHeight = $(".site__header").outerHeight();
	$('.bh__first').css({
		height: windowHeight - headerHeight
	});
}

$(function () {
	var bhOptions = {};
	if ($('.bh__container .bh__slide').length) {
		bhOptions = {
			slidesPerView: 1,
			loop: false,
			spaceBetween: 0,
			// centeredSlides: true,
			speed: 600,
			autoplay: {
				delay: 15000,
				disableOnInteraction: true,
			},
			navigation: {
				nextEl: '.bh__right',
				prevEl: '.bh__left',
			},
			keyboard: true,
			watchOverflow: true,

		};
	}
	var swiper = new Swiper('.bh__container', bhOptions);
});
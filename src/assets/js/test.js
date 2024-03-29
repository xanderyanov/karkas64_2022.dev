$(function () {
	var e, t, o, n;
	$(".functionHeight").length &&
		((e = $(window).height()),
		console.log("windowH " + e),
		(t = $(".site__header").outerHeight()),
		console.log("headerH " + t),
		(o = $(".site__center").outerHeight()),
		console.log("centerH " + o),
		(n = $(".site__footer").outerHeight()),
		console.log("footerH " + n),
		(n = t + o + n),
		console.log("siteH " + n),
		n < e && ((n = o + (e - n)), $(".page__area").css("height", n), console.log(n))),
		$(".menuButton").click(function () {
			$(this).toggleClass("open"), $(".topMenu").slideToggle();
		}),
		$(".swiper-container1").length &&
			new Swiper(".swiper-container1", {
				pagination: ".swiper-pagination1",
				nextButton: ".swiper-button-next1",
				prevButton: ".swiper-button-prev1",
				paginationClickable: !0,
				autoplay: 7500,
				spaceBetween: 0,
				loop: !0,
				effect: "slide",
				onSlideChangeStart: function (e) {
					$(".swiper-slide").children(".swiper__cadr").removeClass("animationBaretsky1").fadeOut(500),
						setTimeout(function () {
							$(".swiper-slide-active")
								.children(".swiper__cadr")
								.fadeIn(500)
								.addClass("animated")
								.addClass("animationBaretsky1");
						}, 500);
				},
			}),
		$(".phoneZ").mask("+7 (999) 999-9999"),
		$(".phone1").mask("+7 (999) 999-9999"),
		$(".phone2").mask("+7 (999) 999-9999"),
		$("table").wrap('<div class="table_outer"></div>'),
		$(".toTop").hide(),
		$(window).scroll(function () {
			0 < $(this).scrollTop() ? $(".toTop").fadeIn() : $(".toTop").fadeOut();
		}),
		$(".toTop").click(function () {
			return $("body,html").animate({ scrollTop: 0 }, 400), !1;
		}),
		$("a[data-fancybox]").fancybox({
			closeBtn: !1,
			arrows: !0,
			keyboard: !0,
			nextClick: !0,
			infobar: !0,
			protect: !0,
			nextEffect: "elastic",
			prevEffect: "elastic",
			padding: 0,
			loop: !0,
			animationEffect: "zoom-in-out",
			transitionEffect: "slide",
			touch: { vertical: !0, momentum: !0 },
		}),
		$(".ig__area").length &&
			$("#instafeed").length &&
			((a = new Instafeed({
				get: "user",
				userId: 3265735555,
				clientId: "e39c33b06d5b4d4b9890b8dcb5179542",
				accessToken: "3265735555.e39c33b.ddbecf2de6cb4af78042699e16cd4fd8",
				limit: 10,
				resolution: "low_resolution",
				template:
					'<div class="ig__item"><a class="ig__link" href="{{link}}" target="_blank" style="background-image: url({{image}});"><img src="assets/img/igcanvas.png" alt="{{caption}}"/></a></div>',
			})),
			a.run()),
		$(".form1").on("click", ".submit1", function (e) {
			e.preventDefault();
			var t = $(".name1").val(),
				o = $(".phone1").val(),
				n = $(".email1").val(),
				a = $(".work_email1").val(),
				e = $(".message1").val();
			"" == t
				? (swal({ title: "Поле Имя пустое", text: "Заполните поле имя", type: "error", confirmButtonText: "ок" }),
				  $(".name1").addClass("error"),
				  setTimeout(function () {
						$(".name1").removeClass("error");
				  }, 3e3))
				: "" == o
				? (swal({
						title: "Поле Телефон пустое",
						text: "Заполните поле телефон",
						type: "error",
						confirmButtonText: "ок",
				  }),
				  $(".phone1").addClass("error"),
				  setTimeout(function () {
						$(".phone1").removeClass("error");
				  }, 3e3))
				: "" == n
				? (swal({ title: "Ошибка Email", text: "Заполните поле Email", type: "error", confirmButtonText: "ок" }),
				  $(".email1").addClass("error"),
				  setTimeout(function () {
						$(".email1").removeClass("error");
				  }, 3e3))
				: /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i.test(n)
				? "" == e
					? (swal({
							title: "Пустое сообщение",
							text: "Заполните текст сообщения",
							type: "error",
							confirmButtonText: "ок",
					  }),
					  $(".message1").addClass("error"),
					  setTimeout(function () {
							$(".message1").removeClass("error");
					  }, 3e3))
					: "" != a
					? swal({ title: "Ах ты жулик", text: "Уберите робота от компьютера", type: "error", confirmButtonText: "ок" })
					: $.post("mail.php", { name: t, phone: o, email: n, message: e }, function () {
							swal({ title: "Спасибо", text: "Ваше сообщение отправлено", type: "success", confirmButtonText: "ок" }),
								$(".name1").val("").removeClass("error"),
								$(".phone1").val("").removeClass("error"),
								$(".email1").val("").removeClass("error"),
								$(".message1").val("").removeClass("error");
					  })
				: (swal({ title: "Ошибка", text: "Корректно заполните поле e-mail", type: "error", confirmButtonText: "ок" }),
				  $(".email1").addClass("error"),
				  setTimeout(function () {
						$(".email1").removeClass("error");
				  }, 3e3));
		}),
		$(".js_btnZ").click(function (e) {
			e.preventDefault(), e.stopPropagation();
			e = $(this);
			e.hasClass("js_active")
				? (e.removeClass("js_active"),
				  $(".js_containerZ").addClass("bounceOutUp").removeClass("bounceInDown").fadeOut(600),
				  $(".overlay").fadeOut(200))
				: (e.addClass("js_active"),
				  $(".js_containerZ").removeClass("bounceOutUp").addClass("bounceInDown").fadeIn(200),
				  $(".overlay").fadeIn(200));
		}),
		$(".overlay").click(function (e) {
			e.preventDefault(),
				$(".js_containerZ").addClass("bounceOutUp").removeClass("bounceInDown").fadeOut(600),
				$(".js_btnZ").removeClass("js_active"),
				$(".overlay").fadeOut(600);
		}),
		$(".formClose").click(function (e) {
			e.preventDefault(),
				$(".js_containerZ").addClass("bounceOutUp").removeClass("bounceInDown").fadeOut(600),
				$(".js_btnZ").removeClass("js_active"),
				$(".overlay").fadeOut(600);
		}),
		$(".formZ").on("click", ".submitZ", function (e) {
			e.preventDefault();
			var t = $(".nameZ").val(),
				o = $(".phoneZ").val(),
				e = $(".work_emailZ").val();
			"" == t
				? (swal({ title: "Поле Имя пустое", text: "Заполните поле имя", type: "error", confirmButtonText: "ок" }),
				  $(".nameZ").addClass("nameZ"),
				  setTimeout(function () {
						$(".nameZ").removeClass("error");
				  }, 3e3))
				: "" == o
				? (swal({
						title: "Поле Телефон пустое",
						text: "Заполните поле телефон",
						type: "error",
						confirmButtonText: "ок",
				  }),
				  $(".phoneZ").addClass("phoneZ"),
				  setTimeout(function () {
						$(".phoneZ").removeClass("error");
				  }, 3e3))
				: "" != e
				? swal({ title: "Ах ты жулик", text: "Уберите робота от компьютера", type: "error", confirmButtonText: "ок" })
				: $.post("mail.php", { name: t, phone: o }, function () {
						swal({ title: "Спасибо", text: "Ваше сообщение отправлено", type: "success", confirmButtonText: "ок" }),
							$(".nameZ").val("").removeClass("error"),
							$(".phoneZ").val("").removeClass("error"),
							$(".js_btn1").removeClass("js-Active"),
							$(".js_containerZ").addClass("bounceOutUp").removeClass("bounceInDown").fadeOut(600),
							$(".overlay").fadeOut(200);
				  });
		}),
		$(".directPrice").click(function (e) {
			e.preventDefault(), e.stopPropagation();
			var t = $(this),
				e = $(this).parent().children(".project__infoTitle").text();
			console.log(e),
				$(".form2__title span").text(e),
				$(".form2 textarea").text(e),
				t.hasClass("js_active")
					? (t.removeClass("js_active"),
					  $(".js_container2").addClass("bounceOutUp").removeClass("bounceInDown").fadeOut(600),
					  $(".overlay").fadeOut(200))
					: (t.addClass("js_active"),
					  $(".js_container2").removeClass("bounceOutUp").addClass("bounceInDown").fadeIn(200),
					  $(".overlay").fadeIn(200));
		}),
		$(".overlay").click(function (e) {
			e.preventDefault(),
				$(".js_container2").addClass("bounceOutUp").removeClass("bounceInDown").fadeOut(600),
				$(".directPrice").removeClass("js_active"),
				$(".overlay").fadeOut(600);
		}),
		$(".js_close").click(function (e) {
			e.preventDefault(),
				$(".js_container2").addClass("bounceOutUp").removeClass("bounceInDown").fadeOut(600),
				$(".directPrice").removeClass("js_active"),
				$(".overlay").fadeOut(600);
		}),
		$(".form2").on("click", ".submit2", function (e) {
			e.preventDefault();
			var t = $(".name2").val(),
				o = $(".phone2").val(),
				n = $(".message2").text(),
				e = $(".work_email2").val();
			"" == t
				? (swal({ title: "Поле Имя пустое", text: "Заполните поле имя", type: "error", confirmButtonText: "ок" }),
				  $(".name2").addClass("error"),
				  setTimeout(function () {
						$(".name2").removeClass("error");
				  }, 3e3))
				: "" == o
				? (swal({
						title: "Поле Телефон пустое",
						text: "Заполните поле телефон",
						type: "error",
						confirmButtonText: "ок",
				  }),
				  $(".phone2").addClass("error"),
				  setTimeout(function () {
						$(".phone2").removeClass("error");
				  }, 3e3))
				: "" != e
				? swal({ title: "Ах ты жулик", text: "Уберите робота от компьютера", type: "error", confirmButtonText: "ок" })
				: $.post("mail.php", { name: t, phone: o, message: n }, function () {
						swal({ title: "Спасибо", text: "Ваше сообщение отправлено", type: "success", confirmButtonText: "ок" }),
							$(".name2").val("").removeClass("error"),
							$(".phone2").val("").removeClass("error"),
							$(".directPrice").removeClass("js-Active"),
							$(".js_container2").addClass("bounceOutUp").removeClass("bounceInDown").fadeOut(600),
							$(".overlay").fadeOut(200);
				  });
		});
});
var share_url = "http://site-creative.ru/",
	share_title = "Сайты в Энгельсе",
	share_desc = "Главная",
	share_image = "",
	share_text = "Главная",
	share_popup_width = 650,
	share_popup_height = 450,
	share_links_container = $(".likeBlock");
"NULL" != share_links_container &&
	(("number" == typeof share_popup_width && "number" == typeof share_popup_height) ||
		((share_popup_width = 626), (share_popup_height = 436)),
	(share = {
		twitter: function (e, t) {
			return (
				(url = "http://twitter.com/share?"),
				(url += "text=" + encodeURIComponent(t)),
				(url += "&url=" + encodeURIComponent(e)),
				(url += "&counturl=" + encodeURIComponent(e)),
				share.popup(url),
				!1
			);
		},
		gp: function (e, t, o, n) {
			return (url = "https://plus.google.com/share?"), (url += "url=" + encodeURIComponent(e)), share.popup(url), !1;
		},
		mail: function (e, t, o, n) {
			return (
				(url = "http://connect.mail.ru/share?"),
				(url += "url=" + encodeURIComponent(e)),
				(url += "&title=" + encodeURIComponent(t)),
				(url += "&description=" + encodeURIComponent(n)),
				(url += "&imageurl=" + encodeURIComponent(o)),
				share.popup(url),
				!1
			);
		},
		vk: function (e, t, o, n) {
			return (
				(url = "http://vkontakte.ru/share.php?"),
				(url += "url=" + encodeURIComponent(e)),
				(url += "&title=" + encodeURIComponent(t)),
				(url += "&description=" + encodeURIComponent(n)),
				(url += "&image=" + encodeURIComponent(o)),
				(url += "&noparse=true"),
				share.popup(url),
				!1
			);
		},
		ok: function (e, t) {
			return (
				(url = "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1"),
				(url += "&st.comments=" + encodeURIComponent(t)),
				(url += "&st._surl=" + encodeURIComponent(e)),
				share.popup(url),
				!1
			);
		},
		fb: function (e, t, o, n) {
			return (
				(url = "http://www.facebook.com/sharer.php?s=100"),
				(url += "&p[title]=" + encodeURIComponent(t)),
				(url += "&p[summary]=" + encodeURIComponent(n)),
				(url += "&p[url]=" + encodeURIComponent(e)),
				(url += "&p[images][0]=" + encodeURIComponent(o)),
				share.popup(url),
				!1
			);
		},
		popup: function (e, t, o) {
			return window.open(e, "", "toolbar=0,status=0,width=" + share_popup_width + ",height=" + share_popup_height), !1;
		},
	}));
var isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
	},
};
function init() {
	var e = new ymaps.Map("map", {
		center: [51.515778710103916, 46.07611271107453],
		zoom: 11,
		controls: ["zoomControl"],
	});
	e.behaviors.disable("scrollZoom"), isMobile.any() && e.behaviors.disable("drag");
	var t = [];
	(t[0] = new ymaps.Placemark(
		[51.467929973539924, 46.101787816399735],
		{
			balloonContentHeader:
				'<div class="baloon__top">Каркас 64</div><div class="baloon__description">каркасное строительство</div>',
			balloonContentBody:
				'<div class="baloon__content"><img src="assets/img/logo1c.png" height="83" width="150"><a href="tel:778801">77-88-01</a>',
			balloonContentFooter:
				'<div class="baloon__footer">Энгельс, улица Мельничная, <br>ГСК Волжский. Строение 222</div>',
			clusterCaption: "Каркас64",
			hintContent: '<div class="baloon__top">Мы в Энгельсе</div>',
		},
		{ iconLayout: "default#image" }
	)),
		(t[1] = new ymaps.Placemark(
			[51.53278464377675, 46.00511899140164],
			{
				balloonContentHeader:
					'<div class="baloon__top">Каркас 64</div><div class="baloon__description">каркасное строительство</div>',
				balloonContentBody:
					'<div class="baloon__content"><img src="assets/img/logo1c.png" height="83" width="150"><a href="tel:778801">77-88-01</a>',
				balloonContentFooter: '<div class="baloon__footer">Саратов, улица Слонова, 1</div>',
				clusterCaption: "Каркас64",
				hintContent: '<div class="baloon__top">Мы в Саратове</div>',
			},
			{ iconLayout: "default#image" }
		));
	var o = new ymaps.Clusterer({
		clusterDisableClickZoom: !1,
		clusterOpenBalloonOnClick: !1,
		clusterBalloonContentLayout: "cluster#balloonCarousel",
		clusterBalloonPanelMaxMapArea: 0,
		clusterBalloonContentLayoutWidth: 300,
		clusterBalloonContentLayoutHeight: 200,
		clusterBalloonPagerSize: 5,
		clusterBalloonPagerType: "marker",
	});
	o.add(t), e.geoObjects.add(o);
}
$(".map__area").length && ymaps.ready(init);
//# sourceMappingURL=main.js.map

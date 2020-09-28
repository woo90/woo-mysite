/*********************** 초기설정 ************************/
/* new Window({ offset: 200, animateCass: 'wow-ani', mobile: false}).init(); */

(function () {
	var slides = [
		{id: 0,src: '../img/landing-img-top-1.jpg',title: '피자'},
		{id: 1,src: '../img/landing-img-top-3.jpg',title: '여자'},
		{id: 2,src: '../img/landing-img-top-4.jpg',title: '남자'}
	];

	var $slideStage = $(".header-wrapper .stage");
	var $slideWrap = $(".header-wrapper .slide-wrap");
	var $btnPrev = $(".header-wrapper .btn-prev");
	var $btnNext = $(".header-wrapper .btn-next");
	var $slides = [];
	var idx = 0;
	var lastIdx = slides.length - 1;
	var interval;
	
	function init() {
		var html;
		for (i in slides) {
			html = '<div class="slide">';
			html += '<img class="w-100" src="' + slides[i].src + '">';
			html += '</div>';
			$slides[i] = $(html);
		}
		interval = setInterval(onNext, 3000);
	}

	function slideInit() {
		$slideWrap.html($slides[idx].clone());
	}

	$btnPrev.click(onPrev);
	$btnNext.click(onNext);
	$slideStage.mouseover(onHover);
	$slideStage.mouseleave(onLeave);

	function onHover() {
		clearInterval(interval);
	}

	function onLeave() {
		interval = setInterval(onNext, 3000);
	}

	function onPrev() {
		dix = (idx == 0) ? lastIdx : idx - 1;
		ani();
	}

	function onNext() {
		dix = (idx == lastIdx) ? 0 : idx + 1;
		ani();
	}

	function ani() {
		$($slides[idx].clone()).appendTo($slideWrap).stop().animate({
			"opacity": 1
		}, 500, slideInit);
	}
	init();
})();
/*********************** 초기설정 ************************/
new Window({ offset: 200, animateCass: 'wow-ani', mobile: false}).init();

(function(){
	var $slideWrap = $(".header-wrapper .slide-wrap");
	var $btnPrev = $(".header-wrapper .btn-prev");
	var $btnNext = $(".header-wrapper .btn-next");
	var n =0;
	var $slides = [];
	var idx = 0;
	var lastIdx = slides.length - 1;
	var interval;
	init();

	function init() {
		for(var i=0; i<$slides.length; i++) {
			$pagerWrap.append('<div class="pager">·</div>');
		}
		$pagerWrap.find(".pager").eq(idx).addClass("active");
		$pagerWrap.find(".pager").click(onClick);
		interval = setInterval(onInterval, 3000);
		$stage.mouseenter(onEnter).mouseleave(onLeave);
		slideInit();
	}
	
function slideInit() {
	var $my= $($slides[idx].clone()).appendTo($slideWrap.empty());
	$my.find(".title").css("opacity");
	$my.find(".title").css("transform");
	$my.find(".title").css({"opacity" : 1, "transform" : "translateX(0)"});
}

$btnPrev.click(onPrev);
$btnNext.click(onNext);

function onPrev() {
	idx = (idx == 0) ? lastIdx : idx - 1;
	ani();
}

function onNext() {
	idx = (idx == lastIdx) ? 0 : idx + 1;
	ani();
}

function ani() {
	$pager.removeClass("active").eq(idx).addClass("active");
	$slideWrap.append($slides[idx].clone());
	var $slide0 = $slideWrap.find(".slide").eq(0);
	var $slide1 = $slideWrap.find(".slide").eq(1);

	$slide0.css({"opacity" : 0, "transform" : "scale(1.3)"});
	$slide1.css("opacity");
	$slide1.css("transform");
	$slide1.css({"opacity" : 1, "transform" : "scale(1)"});
	
	setTimeout(slideInit, 500);
}


})();
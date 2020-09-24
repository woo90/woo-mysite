/*********************** 초기설정 ************************/
new Window({ offset: 200, animateCass: 'wow-ani', mobile: false}).init();

(function(){
	var slides = [
		{ id: 0, src: '../img/landing-img-top-1.jpg', title: '피자' },
		{ id: 1, src: '../img/landing-img-top-3.jpg', title: '여자' },
		{ id: 2, src: '../img/landing-img-top-4.jpg', title: '남자' },
	];

	var $slideStage = $(".header-wrapper .stage");
	var $slideWrap = $(".header-wrapper .slide-wrap");
	var $btnPrev = $(".header-wrapper .btn-prev");
	var $btnNext = $(".header-wrapper .btn-next");

	var $slides = [];
	var idx = 0;
	var lastIdx = slides.length - 1;
	var interval;

	function init(){
		var html, i;
		for( i in slides){
			html = '<div class="slide">';
			html += '<img class="w-100" src="'+slides[i].src+'">';
			html += '<h1>'+i+'</h1>';
			html += '<div class="title">'+slides[i].title+'</div>';
			html += '</div>';
			$slides[i] = $(html);
		}
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
init();


})
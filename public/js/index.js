/*********************** 초기설정 ************************/
new Window({ offset: 200, animateCass: 'wow-ani', mobile: false}).init();

(function(){
var $slideStage = $(".header-wrapper .stage");
var $slideWrap = $(".header-wrapper .slide-wrap");
var $btnPrev = $(".header-wrapper .btn-prev");
var $btnNext = $(".header-wrapper .btn-next");

var $slides = [];
var idx = 0
var lastIdx = slides.length - 1;
var interval;

function init(){
	var html, i;
	for(i in slides){
		html = '<div class="slide">';
		html += '<img class="w-100" src="'+slides[i].src+'">';
		html +='</div>';
		$slides[i] = $(html);
	}
}

function slideInit(){
	$slideWrap.html($slides[idx].clone());
}

$btnPrev.click(onPrev);
$btnNext.click(onNext);
$slideStage.mouseover(onHover);
$slideStage.mouseLeave(onLeave);

function onHover(){
	clearInterval(interval);
}

function onLeave(){
	interval = setInterval(onNext,3000);
}

function onPrev(){
	idx = (idx == 0) ? lastIdx : idx - 1;
	ani();
}

function onNext(){
	idx = (idx == lastIdx) ? 0: idx + 1;
	ani();
}


});
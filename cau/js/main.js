$(function(){
	initmain();
})

function initmain() {
 mainVisual();
 notice_tab();
 cau_info();
 today_paging();
 research();
}
function mainVisual(){
	$(".main-visual li").hide().first().fadeIn(500);
	var timer = 0;
	var cnt= 0;
	var delay = 3000;
	timer = setInterval(make,delay);
	
	function make(){
		cnt++;
		if(cnt > 3){cnt = 0};
		banner();
	}
	$(".vi_paging li").on("click",function(e){
		cnt = $(this).index();
		banner();
	})
	$(".prev").on("click",function(e){
		cnt--;
		if(cnt < 0){cnt = 3};
		banner();
		clearInterval(timer);
		timer = setInterval(make,delay);
		
	})
	$(".next").on("click",function(e){
		cnt++;
		if(cnt > 3){cnt = 0};
		banner();
		clearInterval(timer);
		timer = setInterval(make,delay);		
		
	})
	function banner(){
		$(".main-visual li").hide().eq(cnt).fadeIn(500);
		$(".vi_paging li").removeClass();
		$(".vi_paging li").eq(cnt).addClass("on");
	}
}
function notice_tab(){
	$(".cau-notice dd").hide().first().show();
	$(".cau-notice dt").on("click",function(e){
		$(this).next().fadeIn();
		$(".cau-notice dt").not(this).next().fadeOut();
		$(".cau-notice dt").removeClass();
		$(this).addClass("on");
	})
}
function cau_info(){
	$(".recruit").hide().first().show();
	$(".major").on("click",function(e){
		$(".cau-major").fadeIn();
		$(".cau-exam").fadeOut();
	})
	$(".exam-info").on("click",function(e){
		$(".cau-exam").fadeIn();
		$(".cau-major").fadeOut();
	})
}
function today_paging(){
	var $news = $(".paging-news li");
	var $people = $(".paging-people li");
	var $life = $(".paging-life li");
	var current = 0, page = 0, old=0, timer = 0, delay = 3000;
	var width = 360;

	$news.on("click",function(e){
		current = $(this).index();
		$(".news-cau").animate({left: current*-width},300);
		$news.removeClass();
		$news.eq(current).addClass("on");
	})

	$people.on("click",function(e){
		current = $(this).index();
		$(".power-cau").animate({left: current*-width},300);
		$people.removeClass();
		$people.eq(current).addClass("on");

	})
	
	$life.on("click",function(e){
		current = $(this).index();
		$(".campus-life").animate({left: current*-width},300);
		$life.removeClass();
		$life.eq(current).addClass("on");
	})
}

function research(){
	var $li = $(".cau-research ul li")
	$li.css("overflow","hidden");
	$li.hover(function(e){
		var div = "<div><p>" + $(this).find("img").attr("alt") + "</p></div>"
		$(this).append(div);
		$(this).find("div").stop().fadeIn(300);
		$(this).find("p").stop().animate({top:0},400);
	},function(e){
		$(this).find("div").stop().fadeOut(300);
		$(this).find("p").stop().animate({top:10},400,function(e){
			$(this).parent().remove();
		});
	});
}











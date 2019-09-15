$(function(){
	initmain();
})

function initmain() {
 mainVisual();
 brandStory();
 brand();
 welcome();
 about();
 alliance();
 family();
}

function mainVisual(){
	var cnt = 0;
	var timer = 0;
	var delay = 3500;
	timer = setInterval(make,delay);
	$(".mainvi li").fadeOut(600).first().fadeIn(600);
	function make(){
		cnt++;
		if(cnt > 2){cnt = 0};
		banner();
	}
	$(".left").on("click",function(e){
		cnt--;
		banner();
		if(cnt<0){cnt=2};
		clearInterval(timer);
		timer = setInterval(make,delay);
	})
	$(".right").on("click",function(e){
		make();
		clearInterval(timer);
		timer = setInterval(make,delay);
	})
	$(".paging li").on("click",function(e){
		cnt = $(this).index();
		banner();
	})
	function banner(){
		$(".mainvi li").fadeOut(600).eq(cnt).fadeIn(600);
		$(".paging li").removeClass("on");
		$(".paging li").eq(cnt).addClass("on");
		
	}
}
function brandStory(){
	$(".title li").removeClass();
	var cnt = 0;
	$(".brand-con ul").fadeOut().first().fadeIn();
	$(".title li").on("click",function(e){
		cnt = $(this).index();
		$(".title li").removeClass();
		$(this).addClass("on");
		$(".brand-con ul").fadeOut();
		$(".brand-con ul").eq(cnt).fadeIn();
	})
}
function brand(){
	$(".brand-con ul li").on("hover",function(e){
		$(this).find("div").stop().animate({bottom:"0"},500);
	})
	$(".brand-con ul li").on("mouseleave",function(e){
		$(this).find("div").stop().animate({bottom:"-100px"},500);
	})
}
function welcome(){
	$(".welcome div").removeClass("on");
	$(".welcome div").on("mouseover",function(e){
		cnt = $(this).index();
		$(".welcome div").removeClass("on");
		$(this).addClass("on");
		$(this).css({borderRadius:25});
		$(this).siblings("img").css("transform","scale(1.5)");
	})
	$(".welcome div").on("mouseleave",function(e){
		$(".welcome div").removeClass("on");
		$(this).siblings("img").css("transform","scale(1)");
	})
}
function about(){
	$(".aboutspc div").fadeOut(200);
	$(".aboutspc li").on("hover",function(e){
		$(this).find("div").fadeIn(200);
	})
	$(".aboutspc li").on("mouseleave",function(e){
		$(this).find("div").fadeOut(200);
	})
}
function alliance(){
	var last = $(".brandname li").last();
	$(".brandname").prepend(last);
	$(".brandname li").css("left","-=180px");
	
	var first = "";
	var timer = setInterval(make,2000);
	function make(){
		$(".brandname").animate({left:"-=180px"},600,function(e){
			first = $(".brandname li").first();
			$(".brandname").append(first);
			$(".brandname").css("left","-180px");
		})
	}	
}
function family(){
	var cnt = 0;
	$(".page li").removeClass("on");
	$(".prev").on("click",function(e){
		$(".brandname").animate({left:"-=180px"},600);
		$(".page li").removeClass("on");
		$(this).addClass("on");
	})
	$(".next").on("mouseleave",function(e){
		$(this).find("div").fadeOut(200);
		$(".brandname").animate({left:"+=180px"},600);
		$(".page li").removeClass("on");
		$(this).addClass("on");
	})
}



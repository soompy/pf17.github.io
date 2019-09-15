$(function(){
	initmain();
})

function initmain() {
 mainVisual();
 rollingBanner();
 vod();
}

function mainVisual(){
	$(".banner li").css("left","100%").first().css({"left":"0"});
	var current =0,old=0;
	var timer=0;
	var delay = 3000;
	var $h2 = $(".banner h2");
	var $p =$(".banner li p");
	var $strong =$(".banner li strong");
	var $em =$(".banner li em");
	var $span =$(".banner li span");
	var $prev =$(".btn-box .prev");
	var $next =$(".btn-box .next");
	
	timer=setInterval(make,delay);
	
	$h2.css({opacity:0});
	$p.css({opacity:0});
	$strong.css({opacity:0});
	$em.css({opacity:0});
	$span.css({opacity:0});
	
	for(var i=0;i<=5;i++){
		$p.eq(i).delay(i*300).animate({opacity:1},400);
		$strong.eq(i).delay(i*400).animate({opacity:1},400);
		$em.eq(i).delay(i*500).animate({opacity:1},400);
		$span.eq(i).delay(i*600).animate({opacity:1},400);
	}
	function make(){
		current++;
		if(current > 5){current = 0}	
		banner();
	}
	$(".paging li").on("click",function(e){
		current = $(this).index();
		banner();
		clearInterval(timer);
		setInterval(make,delay);
	})
	$prev.on("click",function(e){
		current--;
		if(current < 0){current=5};
		if(current != old){
			$(".banner li").eq(current).stop().css("left","-100%").animate({left:"0"},500);
			$(".banner li").eq(old).stop().css("left","0").animate({left:"100%"},500);
			old = current;
			common();
		}
		clearInterval(timer);
		timer = setInterval(make,delay);
	})
	$next.on("click",function(e){
		current++;
		if(current > 5){current=0};
		banner();
		clearInterval(timer);
		timer = setInterval(make,delay);
	})
	function banner(){
		if(current != old){
		$(".banner li").eq(current).stop().css("left","100%").animate({left:0},500);
		$(".banner li").eq(old).stop().css("left","0").animate({left:"-100%"},500);
		old = current;
		common();
	}
}
	function common(){
		$(".paging li").removeClass();
		$(".paging li").eq(current).addClass("on");
		
		$h2.css({opacity:0});
		$p.css({opacity:0});
		$strong.css({opacity:0});
		$em.css({opacity:0});
		$span.css({opacity:0});
		for(var i =0;i<=5;i++){
			$h2.eq(i).delay(i*300+300).animate({opacity:1},400);
			$p.eq(i).delay(i*300+400).animate({opacity:1},400);
			$strong.eq(i).delay(i*300+500).animate({opacity:1},400);
			$em.eq(i).delay(i*300+600).animate({opacity:1},400);
			$span.eq(i).delay(i*300+700).animate({opacity:1},400);
		}
	}
}

function rollingBanner(){
	$(".add-banner li").css("top","100%").first().css("top","0");
	var current = 0;old = 0;
	var timer = 0; var delay = 3000;
	timer = setInterval(make,delay);
	function make(){
		current++;
		if(current > 1){current = 0};
		banner();
	}
	$(".event-page li").on("click",function(e){
		current=$(this).index();
		banner();
		clearInterval(timer);
		timer = setInterval(make,delay);
	})
	function banner(){
		if(current != old){
			$(".add-banner li").eq(current).css("top","100%").stop().animate({top:"0"},600);
			$(".add-banner li").eq(old).css("top","0").stop().animate({top:"-100%"},600);
			$(".event-page li").removeClass();
			$(".event-page li").eq(current).addClass("on");
			old = current;
		}
	}
}
function vod(){
	$(".mov li").hide().first().fadeIn(500);
	var cnt = 0;timer = 0;
	var delay = 2000;
	timer = setInterval(make,delay);
	function make(){
		cnt++;
		if(cnt > 2){cnt = 0};
		banner();
	}
	$(".mov-paging li").on("click",function(e){
		cnt = $(this).index();
		banner();
		clearInterval(timer);
		timer = setInterval(make,delay);
	})
	function banner(){
		$(".mov li").hide();
		$(".mov li").eq(cnt).fadeIn(500);
		$(".mov-paging li").removeClass();
		$(".mov-paging li").eq(cnt).addClass("on");
	}
}

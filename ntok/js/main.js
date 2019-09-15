$(function(){
	initmain();
})

function initmain() {
 btn();
 mainVisual();
 notice();
 board();
 rollingBanner();
 cal();
 sns();
 facility();
}
function btn(){
	var isplay = false;
	$(".performance-btn").css("top","-140px")
	$(".top-btn").on("click",function(e){
		if(!isplay){
			$(".performance-btn").animate({top:"0"},500);
		}else{
			$(".performance-btn").animate({top:"-140"},500);
		}
		isplay=!isplay
	})
}
function mainVisual(){
	$(".banner li").css("top","381px").first().css("top","0");
	var current = 0;old = 0;
	var timer = 0;
	var delay = 3000;
	timer = setInterval(make,delay);
	
	function make(){
		current++;
		if(current>5){current=0};
		banner();
		clearInterval(timer);
		timer = setInterval(make,delay);
	}
	
	$(".vi-paging li").on("click",function(e){
		current = $(this).index();
		$(".banner li").eq(current).show();
		banner();
	})
	
	function banner(){
		if(current != old){
			$(".banner li").eq(current).css("top","381px").stop().animate({top:"0px"},500);
			$(".banner li").eq(old).css("top","0px").stop().animate({top:"-380px"},500);
			$(".vi-paging li").removeClass();
			$(".vi-paging li").eq(current).addClass("on");
			old = current;
		}
	}	
}
function notice(){
	var timer = 0;
	var delay =2000;
	var isplay=false;
	
	var last = $(".notice-con li").last();
	$(".notice-con").prepend(last);
	$(".notice-con").css("top","-=35px");
	var first="";	
	timer = setInterval(make,delay);
	
	$(".next").on("click",function(e){
		$(".notice-con").prepend(last);
		$(".notice-con").css("top","-=35px");
		make();
	})
	
	$(".play").on("click",function(e){
		if(!isplay){
			$(".play img").attr("src","images/main/player.png");
			clearInterval(timer);
		}else{
			$(".play img").attr("src","images/main/pause-bars.png");
			make();
			timer=setInterval(make,delay);
		}
		isplay=!isplay;
	})
	
	function make(){
		$(".notice-con").animate({top:"-=35px"},500,function(e){
			first=$(".notice-con li").first();
			$(".notice-con").append(first);
			$(".notice-con").css("top","-35px");
		})	
	}
}
function board(){
	$(".notice-banner li").hide().first().fadeIn(500);
	var delay = 2000;
	var timer = 0;
	var cnt = 0;
	timer = setInterval(make, delay);
	cnt = $(".notice-banner li").index();
	function make(){
		cnt++;
		if(cnt > 2){cnt = 0};
		banner();
	}	
	$(".noticeboard-page li").on("click",function(e){
		current = $(this).index();
		banner();
		clearInterval(timer);
		timer = setInterval(make,delay);
	})
	function banner(){
		$(".notice-banner li").hide();
		$(".notice-banner li").eq(cnt).fadeIn(500);
		$(".noticeboard-page li").removeClass();
		$(".noticeboard-page li").eq(cnt).addClass("on");
	}		
}
function cal(){
	var last=$(".month li").last();
	var lastDay=$(".detail-day").find(".day").last();
	$(".month").prepend(last);
	$(".month").css("top","-=65px");
	$(".detail-day").prepend(lastDay);
	$(".detail-day").css("top","-=65px");
	
	var first="";
	var firstDay="";
	var timer=setInterval(make,3000);
	function make(){
		$(".month").animate({top:"-=65px"},500,function(e){
			first=$(".month li").first();
			firstDay=$(".detail-day").find(".day").first();
			$(".month").append(first);
			$(".month").css("top","-65px");
			$(".detail-day").append(firstDay);
			$(".detail-day").css("top","-65px");
			
			clearInterval();
			setInterval(timer);
		})
	}
	$(".month-next").on("click",function(e){
		make();	
	})
	$(".month-prev").on("click",function(e){
		$(".month").animate({top:"+=65px"},500,function(e){
		last=$(".month li").last();
		$(".month").prepend(last);
		$(".month").css("top","+65px");
		
		lastDay=$(".detail-day").find(".day").last();
		$(".detail-day").prepend(lastDay);
		$(".detail-day").css("top","+65px");
		
		clearInterval();
		setInterval(timer);
	})
})
	
}
function sns(){
	var cnt=0;
	$(".tab li").removeClass();
	$(".article").hide().first().show();
	$(".tab li").on("click",function(e){
		cnt = $(this).index();
		$(".article").fadeOut();
		$(".article").eq(cnt).fadeIn();
		
		$(".tab li").removeClass();
		$(this).addClass("on");
	})	
}

function facility(){
	var last=$(".cooperate li").last();
	var timer=0;
	var delay=2000;
	var isplay=false;
	
	$(".cooperate").prepend(last);
	$(".cooperate").animate({left:"-60px"},300);
	
	var first="";
	timer=setInterval(make,delay);
	function make(){
		$(".cooperate").animate({left:"-=60px"},500,function(e){
			first=$(".cooperate li").first();
			$(".cooperate").append(first);
			$(".cooperate").css("left","-60px");
		})
	}
	$(".play-btn img").on("click",function(e){
		if(!isplay){
			$(".play-btn img").attr("src","images/main/player.png");
			clearInterval(timer);
		}else{
			$(".play-btn img").attr("src","images/main/pause-bars.png");
			timer=setInterval(make,delay);
			make();
		}
		isplay=!isplay;
	})
	
}
function rollingBanner(){
	var cnt=0;old=0;current=0;
	var $li=$(".noticeboard-page li");
	$li.on("click",function(e){
		cnt=$(this).index();
		$(".notice-banner li").hide().first().show();
		$(".notice-banner li").eq(cnt).fadeIn();
		
		$li.removeClass();
		$(this).addClass("on");
	})
	$(".up i").on("click",function(e){
		current++;
		if(current>2){current=0};
		arrow();
	})
	$(".down i").on("click",function(e){
		current--;
		if(current<0){current=2};
		arrow();
	})
	function arrow(){
		$(".notice-banner li").eq(current).css("top","100%").animate({top:"0"},300);
		$(".notice-banner li").eq(old).css("top","0").animate({top:"100%"},300);
		
	}
}


	
















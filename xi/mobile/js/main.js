$(function(){
	initmain();
})

function initmain() {
 mainVisual();
 rollingBanner();
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
	
	for(var i=0;i<=4;i++){
		$p.eq(i).delay(i*300).animate({opacity:1},400);
		$strong.eq(i).delay(i*400).animate({opacity:1},400);
		$em.eq(i).delay(i*500).animate({opacity:1},400);
		$span.eq(i).delay(i*600).animate({opacity:1},400);
	}
	function make(){
		current++;
		if(current > 4){current = 0}	
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
		banner();
		clearInterval(timer);
		timer = setInterval(make,delay);
	})
	$next.on("click",function(e){
		current++;
		if(current > 4){current=0};
		banner();
		clearInterval(timer);
		timer = setInterval(make,delay);
	})
	function banner(){
		if(current != old){
		$(".banner li").eq(current).stop().css("left","100%").animate({left:0},500);
		$(".banner li").eq(old).stop().css("left","0").animate({left:"-100%"},500);
		$(".paging li").removeClass();
		$(".paging li").eq(current).addClass("on");
		old=current;
		$h2.css({opacity:0});
		$p.css({opacity:0});
		$strong.css({opacity:0});
		$em.css({opacity:0});
		$span.css({opacity:0});
		for(var i =0;i<=4;i++){
			$h2.eq(i).delay(i*300+300).animate({opacity:1},400);
			$p.eq(i).delay(i*300+400).animate({opacity:1},400);
			$strong.eq(i).delay(i*300+500).animate({opacity:1},400);
			$em.eq(i).delay(i*300+600).animate({opacity:1},400);
			$span.eq(i).delay(i*300+700).animate({opacity:1},400);
		}
		}
	}
}

function rollingBanner(){
	$(".event li").css("left","360px").first().css("left","0");
	var current=0;old=0;
	var timer=0;
	delay=3000;
	timer=setInterval(make,delay);
	
	function make(){
		current++;
		if(current>1){current=0};
		$(".paging li").removeClass();
		$(".paging li").eq(current).addClass("on");
		banner();
	}
	$(".paging li").on("click",function(e){
		current=$(this).index();
		banner();
		clearInterval(timer);
		setInterval(make,delay);
		$(".paging li").removeClass();
		$(this).addClass("on");
	})
	function banner(){
		if(current!=old){
			$(".event li").eq(current).css("left","360px").animate({left:"0"},600);
			$(".event li").eq(old).css("left","0").animate({left:"-360px"},600);
			$(".paging li").removeClass();
			$(".paging li").eq(current).addClass("on");
			old=current;
		}	
	}
	
}
$(function(){
	initmain();
})

function initmain() {
 tabMenu();
 mainVisual();
 today();
}

function tabMenu(){
	$(".notice dd").hide().first().show();
	$(".notice dt").on("click",function(e){
		$(this).next().fadeIn();
		$(".notice dt").not(this).next().fadeOut();
		$(".notice dt").removeClass();
		$(this).addClass("on");
	})
}

function mainVisual(){
$(".visual-banner li").css("left","100%").first().css("left","0");
	var current=0, old=0 ,timer=0;
	var delay=4000;
	timer=setInterval(make,delay);
	
	function make(){
		current++;
		if(current>3){current=0};
		banner();
	}
	$(".vi-paging li").on("click",function(e){
		current=$(this).index();
		banner();
	})
	function banner(){
		if(current!=old){
			$(".visual-banner li").eq(current).css("left","100%").animate({left:"0"},500);
			$(".visual-banner li").eq(old).css("left","0").animate({left:"-100%"},500);
			$(".vi-paging li").removeClass();
			$(".vi-paging li").eq(current).addClass("on");
			old=current;
		}
	}
}

function today(){
	var $btn = $(".cau-today ul li");
	var $span = $(".cau-today span");
	var delay = 3000,current = 0,old = 0;
	var n = $(".cau-today ul li").length;
	var timer = 0;
	timer = setInterval(make,delay);
	
	$btn.css("left","-100%").first().css("left","0");
	$btn.css("overflow","hidden");
	
	function make(){
		current++;
		if(current > n-1){current = 0};
		banner();
	}
	$(".prev").on("click",function(e){
		current--;
		if(current < 0){current =  n-1};
		if(current != old){
			$btn.eq(current).stop().css("left","-100%").animate({left:"0"},400);
			$btn.eq(old).stop().css("left","0").animate({left:"100%"},400);
			for(var i = 0; i < n; i++){
				$span.eq(i).delay(i*100+400).animate({left:40,opacity:1},400);
			}
			old = current;
		}
		
	})
	$(".next").on("click",function(e){
		current++;
		if(current > n-1){current = 0};
		banner();			
	})	
	
	function banner(){
		if(current != old){
		$btn.eq(current).stop().css("left","100%").animate({left:0},800);
		$btn.eq(old).stop().css("left","0").animate({left:"-100%"},800);
		$span.css({opacity:0,left:-100});
		for(var i = 0; i < n; i++){
			$span.eq(i).delay(i*100+400).animate({left:40,opacity:1},400);
		}		
		old = current;
	}	
	return false;
	}
}
	

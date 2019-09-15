$(function(){
	init();
})

function init() {
 turn();
 center();
 benefit();
 button();
 nav();
 test();  
 present();
 notice();
 prize();
}
function turn(){
	var isplay=false;
	$(".quick img").on("click",function(e){
		if(!isplay){
			$(this).attr("src","images/main/switch-on.png");
		}else{
			$(this).attr("src","images/main/switch-off.png");
		}
		isplay=!isplay;
	})
	
}
function center(){
	$(".center").hide();
	var isplay = false;
	$(".quick > li").eq(1).on("hover",function(e){
		if(!isplay){
			$(".center").show();
		}else{
			$(".center").hide();
		}
		isplay=!isplay;	
	})
}
function benefit(){
	$(".benefit").hide();
	var isplay=false;
	$(".quick > li").eq(2).on("hover",function(e){
		if(!isplay){
			$(".benefit").show();
		}else{
			$(".benefit").hide();	
		}
		isplay=!isplay;	
	})
}
function button(){
	$(".search ul").hide();
	var isplay = false;
	$(".search input").on("hover",function(e){
		if(!isplay){
		$(".search ul").show();
		}else{
		$(".search ul").hide();
	}
	isplay = !isplay;
	})
}
function nav(){
	var top=0;
	var offTop = $("#nav").offset().top;
	$(window).on("scroll",function(e){
		top = $(window).scrollTop();
		if(top>offTop){
			$("#nav").addClass("fix");
		}else{
			$("#nav").removeClass();
		}
	})
}
function test(){
	var last=$(".product-list li").last();	
	$(".product-list ul").prepend(last);
	$(".product-list ul").css("left","-=82px")
	
	var first="";
	var timer=setInterval(make,1000);
	function make(){
		$(".product-list ul").animate({left:"-=1000px"},400,function(e){
			first=$(".product-list li").first();
			$(".product-list ul").append(first);
			$(".product-list ul").css("left","-82px");
		})
	}
	
	$(".list-btn").find(".next").on("click",function(e){
		make();
		clearInterval(timer);
		setInterval(timer);
	})
	$(".list-btn").find(".prev").on("click",function(e){
		$(".product-list ul").animate({left:"+=82px"},400,function(e){
			last=$(".product-list ul li:last");
			$(".product-list ul").prepend(last);
			$(".product-list ul").css("left","-82px");
		})
		clearInterval(timer);
		setInterval(timer);
	})
	
}

function present(){
	$(".popular li").hide().first().fadeIn(500);
	var current = 0;
	var timer = 0;
	var n = 2;
	var delay = 3000;
	$(".page span").text(current+1);
	timer = setInterval(make,delay);
	function make(){
		current++;
		if(current > n){current = 0};
		banner();
		$(".page span").text(current+1);
	}
	$(".btn").find(".prev").on("click",function(e){
		current--;
		if(current < 0){current = n};
		banner();
		$(".page span").text(current+1);
		clearInterval(timer);
		timer = setInterval(make,delay);
	})
	$(".btn").find(".next").on("click",function(e){
		current++;
		if(current > n){current = 0};
		banner();
		$(".page span").text(current+1);
		clearInterval(timer);
		timer = setInterval(make,delay);
	})
	function banner(){
		$(".popular li").hide();
		$(".popular li").eq(current).stop().fadeIn(500);
	}
}

function notice(){
	var last = $(".notice ul li").last();
	var delay = 2000;
	$(".notice ul").prepend(last);
	$(".notice ul").css({top:"-42px"});
	
	var first = "";
	var timer=setInterval(make,delay);
	function make(){
		$(".notice ul").animate({top:"-=42px"},500,function(e){
		first=$(".notice ul li").first();
		$(".notice ul").append(first);
		$(".notice ul").css("top","-42px");
		
		})
	}
}
function prize(){
	var last=$(".prize ul li").last();
	var delay=2000;
	$(".prize ul").prepend(last);
	$(".prize ul").css({top:"-=42px"});
	var first="";
	var timer = setInterval(make,delay);
	function make(){
		$(".prize ul").animate({top:"-=42px"},500,function(e){
		first=$(".prize ul li").first();
		$(".prize ul").append(first);
		$(".prize ul").css("top","-42px");
	});
	}
	
	
}


















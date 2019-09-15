$(function(){
	init();
})

function init() {
 gnb(); 
 floating(); 
}

function gnb(){
	$(".sub-inner").hide();
	var cnt = 0;
	var w = 190;

	$("#gnb > li").hover(function(e){
		cnt = $(this).index();
		$("#header").css("height","630px");
		$(".sub-inner").stop().animate({height:"600"},50);
		$(".sub-inner").hide();
		$(".sub-inner").eq(cnt).show();
		$("#gnb >li").removeClass();
		$(this).addClass("on");	
		$("#nav .bg-img").fadeIn(500);
		$("#gnb span").animate({left:cnt*w},100);	
	})
	
	$("#gnb").on("mouseleave",function(){
		$("#header").css("height","129px");
		$(".sub-inner").stop().animate({height:"0"},50);
		$("#nav .bg-img").stop().fadeOut(200)	
		
	})	
}
function floating(){
 	var top = 0;
 	var vity = $("#visual").offset().top;
 	$(window).on("scroll",function(e){
 		top = $(window).scrollTop()+200;
 		$(".floating-menu").stop().animate({top:top},200);
 		if(top > vity){
 			$(".floating-menu").fadeIn();
 		}else{
 			$(".floating-menu").fadeOut();
 		}
 	})
 	$(".floating-menu ul li:nth-child(4)").on("click",function(e){
 		top = $(window).scrollTop()+200;
 		$(window).stop().animate({top:0},2000);
 	})
}




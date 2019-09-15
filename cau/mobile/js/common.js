$(function(){
	var isplay = false;
	$(".fa-bars").on("click",function(e){
		if(isplay){
			$("#nav").animate({left:"0%"},400);
		}else{
			$("#nav").animate({left:"-60%"},400);
		}
		 isplay  = !isplay
	})
})

$(function(){
	$(".menu").css("right","-100%").hide();
	var isplay=false;
	$(".dot").on("click",function(e){
		if(!isplay){
			$(".menu").animate({right:"0"},400).show();
		}else{
			$(".menu").animate({right:"-100%"},400);
		}
		isplay=!isplay;
	})
	$(".close").on("click",function(e){
		$(".menu").css("right","0").animate({right:"-100%"},500);
	})
})


$(function(){
	var $li = $("#gnb li");
	$li.children("ul").hide().first().show();
	$li.on("click",function(e){
		$(this).children("ul").stop().slideDown();
		$li.stop().not(this).children("ul").slideUp();	
		$li.removeClass();
		$(this).addClass("on");
	})
})



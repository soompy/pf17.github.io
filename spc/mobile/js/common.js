$(function(){
	var isplay = false;
	$(".all-menu i").on("click",function(e){
		if(isplay){
			$("#gnb").animate({left:"100%"},400);
		}else{
			$("#gnb").animate({left:"0%"},400);
		}
		isplay=!isplay;
	})
})

$(function(){
	$(".gnb li").children("ul").hide();
	$(".gnb li").on("click",function(e){
		$(this).children("ul").stop().slideDown();
		$(".gnb li").stop().not(this).children("ul").slideUp();
	})
})



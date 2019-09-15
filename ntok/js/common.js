$(function(){
	init();
})

function init() {
 gnb();
}

function gnb(){
	$(".gnb li").removeClass();
	$(".gnb li").children("ul").hide();
	$(".gnb li").on("click",function(e){
		$(this).children("ul").stop().slideDown();
		$(".gnb li").stop().not(this).children("ul").slideUp();	
		$(".gnb li").removeClass();
		$(this).addClass("on");
		return false;
	})
}



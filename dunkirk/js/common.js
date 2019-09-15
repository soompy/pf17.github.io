$(function(){
	init();
})

function init() {
 gnb(); 
}

function gnb(){
	$("#gnb li a").on("click",function(e){
		var top = 0;
		var href = $(this).attr("href");
		top = $(href).offset().top;
		$("html,body").animate({scrollTop:top},700);
		return false;
	})
}


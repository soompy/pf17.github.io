$(function(){
	init();
})

function init() {
	nav();
}

function nav(){
	$("nav ul li strong").hide()
	var top = 0;
	var posY = [];
	for(var i = 0; i <= 5; i++){
		posY[i] = $("#content"+i).offset().top;
	}
	$(window).on("scroll",function(e){
		top = $(window).scrollTop();
		for(var i = 0; i <= 5; i++){
			if(top >= posY[i]){
			$("nav ul li").find("img").removeClass();
			$("nav ul li").find("img").eq(i).addClass("on");
			$("nav strong").hide().eq(i).show();
		}	
	}
})
	
	var sidetop = 0;
	$("nav ul li a").on("click",function(e){
		var href = $(this).attr("href");
		sidetop = $(href).offset().top;
		$("html,body").animate({scrollTop:sidetop},800);
		return false;
	})
	$("nav ul li a").on("hover",function(e){
		$(this).prev("strong").show();
	},function(){
		$(this).prev("strong").hide();
	})
	
	$("#gnb li a").on("click",function(e){
		var href = $(this).attr("href");
		sidetop = $(href).offset().top;
		$("html,body").animate({scrollTop:sidetop},800);
		return false;
	})	
}



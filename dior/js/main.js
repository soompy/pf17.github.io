$(function(){
	initmain();
})

function initmain() {
 allMenu();
 nation();
 photo();
 sns();
}

function allMenu(){
	var isplay=false;
	$(".all").css("right","-100%");
	$(".all-menu i").on("click",function(e){
		if(isplay){
			$(".all").animate({right:"0"},500);
		}else{
			$(".all").animate({right:"-100%"},500);
		}	
		isplay = !isplay
	})
	$(".all li").on("hover",function(e){
		$(".all li").removeClass();
		$(this).addClass("on");
	})
	$(window).on("resize",function(e){
		var w=$(window).width();
		if(w<=480){
			$(".all").show();
		}else{
			$(".all").hide();
		}
		
	})	
}

function nation(){
	var isplay = false;	
	$(".nation").css("overflow","hidden").css("height","26px");
	$(".nation").on("click",function(e){
		if(!isplay){
			$(".nation").animate({height:"276px"},400);
		}else{
			$(".nation").animate({height:"26px"},400);
		}
		isplay = !isplay;
		return false;	
	})
}

function photo(){
	var $span=$(".content4 li span");
	var $em=$(".content4 li em");
	var $div = "<div>" + $span.append + $span.em + "</div>"
	$span.hide();
	$em.hide();
	$(".content4 li").on("hover",function(e){
		$(this).find("span").fadeIn();
		$(this).find("em").fadeIn();
		$(this).find("div").css({backgroundColor:"#191919",opacity:0.5}).fadeIn();
	})
	$(".content4 li").on("mouseleave",function(e){
		$(this).find("span").fadeOut();
		$(this).find("em").fadeOut();
		$(this).find("div").fadeOut();
	})
	
}
function sns(){
	$(".sns ul li").on("hover",function(e){
		$(this).css("transform","rotate(45deg)");
	});
	$(".sns ul li").on("mouseleave",function(e){
		$(this).css("transform","rotate(0deg)");
	});
}

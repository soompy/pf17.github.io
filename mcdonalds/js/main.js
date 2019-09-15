$(function(){
	initmain();
})

function initmain() {
 page();
 minion();
 effect();
 menu();
 happymeal();
 list();
 promotion();
}

function page(){
	var h = $(window).height();
	$(".mac").height(h);
}
function minion(){
	$(".newmenu img").css("opacity","0");
	
	$(".newmenu img").eq(0).delay(300).animate({opacity:1},500);
	$(".newmenu img").eq(1).delay(600).animate({opacity:1},500);
	$(".newmenu img").eq(2).delay(900).animate({opacity:1},500);
}
function effect(){
	$(".signiture-burger img").css("opacity","0");
	$(".signiture-logo").fadeOut();
	$(".waffle img").css("opacity","0");
	
	var ty=0;
	var ty1 = $("#header").offset().top;
	var ty2 = $("#content0").offset().top;
	var ty3 = $("#content1").offset().top;
	var ty4 = $("#content2").offset().top;
	var ty5 = $("#content3").offset().top;
	var cnt=0;
		
	ty = $(window).scrollTop();

		$(".bun").delay(100).css("top","0").animate({top:600,opacity:1},500);
		$(".patty").delay(200).css("top","0").animate({top:544,opacity:1},500);
		$(".cheese").delay(300).css("top","0").animate({top:537,left:"13%",opacity:1},500);
		$(".topping").delay(400).css("top","0").animate({top:480,left:"12%",opacity:1},500);  
		$(".onion").delay(500).css("top","0").animate({top:579,opacity:1},500);
		$(".pickle").delay(600).css("top","0").animate({top:520,opacity:1},500);
		$(".tomato").delay(700).css("top","0").animate({top:546,opacity:1},500);
		$(".grass").delay(800).css("top","0").animate({top:500,opacity:1},500);
		$(".bread").delay(900).css("top","0").animate({top:430,opacity:1},500);
	
		$(".signiture-logo").fadeIn(1200);
		$(".waffle img").delay(1000).animate({opacity:"1"},800);
	
	$(".happymeal li").removeClass();
	$(".happymeal li:after").removeClass();
	if(ty>ty3 +100){
		$(".happymeal li").on("click",function(e){
			cnt=$(this).index();
			$(".happymeal li").removeClass();
			$(".happymeal li:after").removeClass();
			$(this).addClass("on");
			
			$(".morning-set li img").eq(cnt).addClass("on");
		})
	}	
}
function menu(){
	$(".menu li").on("click",function(e){
		$(".menu li div").removeClass();
		$(this).find("div").addClass("on");
	})
}
function happymeal(){
	var cnt = 0;
	$(".morning-set li img").removeClass();
	$(".happymeal li").on("click",function(e){
		cnt=$(this).index();	
	
		$(".happymeal li").removeClass();
		$(".happymeal li").eq(cnt).addClass("on");
		
		$(".morning-set li img").removeClass();
		$(".morning-set li img").eq(cnt).addClass("on");
	})
}
function promotion(){
	$("#content4 ul li").removeClass();
	$("#content4 ul li").on("hover",function(e){
		$("#content4 ul li").removeClass();
		$(this).addClass("on");	
	})
}
function list(){
	var last = $(".menu li").last();
	$(".menu").prepend(last);		
	$(".menu").css("left","-375px");	
	var first = "";
	var timer = setInterval(make,2000);
	function make(){
		$(".menu").animate({left:"-=375px"},500,function(e){
			first=$(".menu li").first();
			$(".menu").append(first);
			$(".menu").css("left","-375px");
		})
	}
}

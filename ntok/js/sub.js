$(function(){
	initsub();
})

function initsub() {
	edu();
	gallery();
	timeline();
}
function edu(){
	$(".program-inner p").on("hover",function(e){
		$(".program-inner p").removeClass();
		$(this).addClass("on");
	})
	$(".program-list li").on("hover",function(e){
		$(".program-list li").removeClass();
		$(this).addClass("on");
	})
}
function gallery(){
	var $ul=$(".gallery ul");
	var last=$(".gallery ul li").last();
	$ul.prepend(last);
	$ul.css("left","-25%");
	var first="";
	var timer=setInterval(make,4000);
	function make(){
		$ul.animate({left:"-=25%"},400,"linear",function(e){
			var first=  $(".gallery ul li").first();
			$ul.append(first);
			$ul.css("left","-25%");
		})		
	}	
}

function timeline(){
	var last=$(".record .timeline").last();
	$(".record").prepend(last);
	$(".record").css("top","-=100%");
	var first="";
	var timer=setInterval(make,3000);
	function make(){
		$(".record").animate({top:"-=100%"},500,function(e){
			first=$(".record .timeline").first();
			$(".record").append(first);
			$(".record").css("top","-100%");
		})	
	}	
}
 

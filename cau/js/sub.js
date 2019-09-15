$(function(){
	initsub();
})

function initsub() {
	club();
	major();
	map1();
	facility();
	notice();
	research_center();
	bk21();
	join();
	special();
}

function club(){
	var cnt = 0;
	$(".type").hide().first().show();
	$(".seoul-list li").on("click",function(e){
		cnt = $(this).index();
		$(".type").fadeOut();
		$(".type").eq(cnt).fadeIn();
		$(".seoul-list li").removeClass();
		$(this).addClass("on");
	})
}
function major(){
	var cnt = 0;
	var $em = $(".special-list em")
	$(".major-wrap").hide().first().show();
	$(".major-btn li").on("click",function(e){
		cnt = $(this).index();
		$(".major-wrap").fadeOut();
		$(".major-wrap").eq(cnt).fadeIn();
		
		$(".major-btn li").removeClass();
		$(this).addClass("on");
	})
	$em.removeClass();
	$em.on("hover",function(e){
		$em.removeClass();
		$(this).addClass("on");
	})
}
function map1(){
    $(".map-wrap").hide().first().show();
   	var cnt = 0;
	$(".cam p").on("click",function(e){
		cnt = $(this).index();	
		$(".map-wrap").hide();
		$(".map-wrap").eq(cnt).show();
		$(".cam p").removeClass();
		$(this).addClass("on");
	})
}
function facility(){
	var cnt = 0;
	$(".cau-facility").hide().first().show();
	$(".facility-tab li").on("click",function(e){
		cnt = $(this).index();
		$(".cau-facility").hide();
		$(".cau-facility").eq(cnt).fadeIn();
		$(".facility-tab li").removeClass();
		$(this).addClass("on");
	})
}
function notice(){
	var cnt = 0;
	$(".school-notice").hide().first().show()
	$(".notice-page li").on("click",function(e){
		$(".school-notice").hide().first().show();
		cnt = $(this).index();
		$(".school-notice").hide();
		$(".school-notice").eq(cnt).fadeIn();
		$(".notice-page li").removeClass();
		$(this).addClass("on");
	})
}

function research_center(){
	$(".additional").hide().first().show();
	$(".center h3").on("click",function(e){
		$(".center h3").not(this).next().slideUp();
		$(this).next().slideDown();
		$(".center h3").removeClass();
		$(this).addClass("on");
	})
}
function bk21(){
	var cnt = 0;
	var arrX = [0,-900,-1800];
	
	var X = [134,456,776];
	$(".gallery").css("overflow","hidden");
	$(".small-gallery li").on("click",function(e){
		cnt = $(this).index()
		$(".big-gallery").animate({left:arrX[cnt]},400);
		$(".pic-wrap span").animate({left:X[cnt]},400);	
	})
}

function join(){
	$(".chkbox").removeClass("agree");
	$(".chkbox").on("click",function(e){
		$(this).toggleClass("agree");
	})
}
function special(){
	$(".special-list a img").on("click",function(e){
		var bg = $("<div class = 'bg'>");
		$(body).append(bg);
		$(".bg").hide();
		$(".bg").fadeIn(100);
	$(".bg").on("click",function(e){
		$(this).fadeOut(100,function(e){
			$(this).remove();
		});
	})
	})
}








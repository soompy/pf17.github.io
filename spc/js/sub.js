$(function(){
	initsub();
})

function initsub() {
	global();
	eventTab();
	event();
	charity();
	donate();
	hire();
}
function global(){
	var cnt = 0;
	$(".present-info li").hide().first().show();
	$(".present li").on("click",function(e){
		cnt = $(this).index();
		$(".present li").removeClass();
		$(this).addClass("on");
		$(".present-info li").hide();
		$(".present-info li").eq(cnt).show();
	})

}
function eventTab(){
	$(".event-tab li").removeClass();
	$(".happypoint").hide();
	$(".event-tab li").on("click",function(e){
		$(".event-tab li").removeClass();
		$(this).addClass("on");
	})
	$(".event-tab li").eq(0).on("click",function(e){
		$(".happypoint").hide();
		$(".all").show();
	})
	$(".event-tab li").eq(1).on("click",function(e){
		$(".all").hide();
		$(".happypoint").show();
	})
}
function event(){
	var cnt = 0;
	$(".page-number p a").removeClass();
	$(".all ul").hide().first().show();
	$(".page-number p a").on("click",function(e){
		cnt = $(".page-number p a").index("text");
		$(".page-number p a").removeClass();
		$(this).addClass("on");
		$(".all ul").eq(cnt).show();
		return false;
	})
	$(".prev").on("click",function(e){
		cnt = $(".page-number p a").index("text");
		cnt--;
		$(".page-number p a").eq(cnt).addClass("on");
		$(".all ul").eq(cnt).show();
	})
	$(".next").on("click",function(e){
		cnt = $(".page-number p a").index("text");
		cnt++;
		$(".page-number p a").eq(cnt).addClass("on");
		$(".all ul").eq(cnt).show();
	})
}
function charity(){
	$(".graphic ul li").on("mouseover",function(e){
		$(this).css("background","#eee");
		$(this).find("span").css("fontSize","28px");
	})
	$(".graphic ul li").on("mouseleave",function(e){
		$(this).css("background","#fff");
		$(this).find("span").css("fontSize","22px");
	})
}
function donate(){
	var cnt = 0;
	cnt = $(".donate-tab li").index();
	
	$(".spc-donate").hide().first().show();
	$(".donate-list ul").hide().first().show();
	
	$(".donate-tab li").on("click",function(e){
		$(".donate-tab li").removeClass();
		$(this).addClass("on");
	})
	$(".donate-tab li").eq(cnt).on("click",function(e){
		$(".spc-donate").hide();
		$(".donate-list ul").hide();
		$(".spc-donate").eq(cnt).show();
		$(".donate-list ul").eq(cnt).show();
	})
	$(".donate-show dd").width(0);
	$(".donate-list ul li").on("click",function(e){
		cnt = $(this).index();
		$(".donate-list ul li").removeClass();
		$(this).addClass("on");
		$(".donate-show dd").width(0);
		$(".donate-show dd").eq(cnt).width(910);
	})
	$(".donate-show dt a").on("click",function(e){
		if( !$(this).hasClass("nowBtn")){
			$(".now").animate({width:0},500);
			$( $(this).attr("href") ).animate({width:"910"},500);
			$(".now").animate({width:0},500);
			
			$(".donate-show dd").removeClass();
			$( $(this).attr("href") ).addClass("now");
			$(".donate-show dt a").removeClass();;
			$(this).addClass("nowBtn");
		}
			return false;
	})
}
function hire(){
	$(".appli").hide();
	$(".hire-info li").mouseover(function(e){
		$(this).find(".appli").show();
	})
	$(".hire-info li").mouseleave(function(e){
		$(this).find(".appli").hide();
	})
}












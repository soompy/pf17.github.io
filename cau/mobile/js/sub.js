$(function(){
	initsub();
})

function initsub() {
	quick();
	notice();
	research_center();
	facility();
}
function quick(){
	var isplay = false;
	$(".quick-menu ul").css("overflow","hidden").css("height","27px");
	$(".quick-menu ul li").on("click",function(e){
	 if(!isplay){
	 	 $(this).parent("ul").animate({height:"140px"},400);
	 }else{
	 	 $(this).parent("ul").animate({height:"27px"},400);
	 }
	 isplay = !isplay;
	return false;
	}) 
}
function notice(){
	var cnt = 0;
	$(".school-notice").hide().first().show()
	$(".notice-page li").on("click",function(e){
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
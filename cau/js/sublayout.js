$(function(){
	initsublayout();
})

function initsublayout() {
	quick();
}

function quick(){
	var isplay1 = false;
	$(".quick-menu ul li ul").css("overflow","hidden").css("height","0");
	$(".quick-menu ul > li").on("click",function(e){
	 if(!isplay1){
	 	 $(this).find("ul").animate({height:"170px"},400);
	 }else{
	 	$(this).find("ul").animate({height:"0px"},400);
	 }
	 isplay1 = !isplay1;
	return false;
	}) 
	
}

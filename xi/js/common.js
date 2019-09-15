$(function(){
	init();
})

function init() {
 gnb();  
}
function gnb(){
	$("#gnb > li").find("ul").slideUp();
	$("#gnb > li").on("mouseover",function(e){
		$(this).find("ul").slideToggle(200);
	})
	$("#gnb > li").on("mouseleave",function(e){
		$(this).find("ul").slideUp(200);
	})
}
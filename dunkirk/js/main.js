$(function(){
	initmain();
})

function initmain() {
	actor();
	photo();
}

function actor(){
	$(".actor div").fadeOut(400);
	$(".actor ul li").on("mouseover",function(e){
		$(this).find("div").fadeIn(400);
	})
	$(".actor ul li").on("mouseleave",function(e){
		$(this).find("div").fadeOut(400);
	})
}
function photo(){
	$(".gallery div").fadeOut(400);
	$(".gallery ul li").on("mouseover",function(e){
		$(this).find("div").fadeIn(400);
	})
	$(".gallery ul li").on("mouseleave",function(e){
		$(this).find("div").fadeOut(400);
	})
}

$(function(){
	init();
})

function init() {
 gnb(); 
 side_menu();
 gallery();
 top_scroll();  
}

function gnb(){
	$(".submenu").fadeOut();
	$(".menu").on("mouseover",function(e){
		$(".submenu").fadeIn();
	})
	$(".submenu").on("mouseleave",function(e){
		$(".submenu").fadeOut();
	})
}
function side_menu(){}
function gallery(){}
function top_scroll(){}

$(function(){
	initmain();
})

function initmain() {
	mainvisual();
	alliance();
}
function mainvisual(){
	var cnt = 0;
	var timer = 0;
	var delay = 3000;
	timer = setInterval(make,delay);
	cnt = $(".mainvisual li").index();
	$(".mainvisual li").hide().first().show();
	function make(){
		cnt++;
		if(cnt>2){cnt=0};
		$(".mainvisual li").hide().eq(cnt).show();
	}
}
function alliance(){
	var last = $(".brandname li").last();
	$(".brandname").prepend(last);
	$(".brandname li").css("left","-=180px");
	
	var first = "";
	var timer = setInterval(make,2000);
	function make(){
		$(".brandname").animate({left:"-=180px"},600,function(e){
			first = $(".brandname li").first();
			$(".brandname").append(first);
			$(".brandname").css("left","-180px");
		})
	}	
}
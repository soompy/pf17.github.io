$(function(){
	initmain();
})

function initmain() {
 mainVisual();
 thisBook();
 interviewBtn();
 wall();
 bookTab();
 productTab();
 talkTab();
 writeTab();
 readerTab();
 gift();
 musicAdv();
}

function mainVisual(){
	$(".main-banner li").css("left","100%").first().css("left","0");
	var $li = $(".banner-paging li")
	var current=0,old=0;
	var timer = setInterval(make,3000);
	
	$li.on("click",function(e){
		current=$(this).index();
		banner();
		clearInterval(timer);
		setInterval();
	})
	function make(){
		current++;
		if(current > 6){current = 0};
		banner();
	}
	$(".vi-prev").on("click",function(e){
		current--;
		if(current<0){current=6}
		$(".main-banner li").eq(current).stop().css("left","-100%").animate({left:"0"});
		$(".main-banner li").eq(old).stop().css("left","0").animate({left:"100%"});
		$li.removeClass();
		$li.eq(current).addClass("on");
		old=current;
	})
	$(".vi-next").on("click",function(e){
		make();
		banner();
	})
	function banner(){
	if(current!=old){
		$(".main-banner li").eq(current).stop().css("left","100%").animate({left:0},500);
		$(".main-banner li").eq(old).stop().css("left","0").animate({left:"-100%"},500);
		$li.removeClass();
		$li.eq(current).addClass("on");
		old=current;
	}	
	}
}
function thisBook(){
	var cnt=0;
	$(".this-book").css("opacity","0").first().css("opacity","1");
	$(".this-prev").on("click",function(e){
		cnt=cnt-1;
		$(".this-book").css("opacity","0").eq(cnt-1).css("opacity","1")
		if(cnt<0){cnt=1};
	});
	$(".this-next").on("click",function(e){
		cnt=cnt-1;
		$(".this-book").css("opacity","0").eq(cnt+1).css("opacity","1");
		if(cnt<0){cnt=1};
	});
}

function interviewBtn(){
	cnt=0;
	$(".interview ul").css("opacity","0").first().css("opacity","1");
	$(".interview-prev").on("click",function(e){
		cnt=cnt-1;
		$(".interview ul").css("opacity","0");
		$(".interview ul").eq(cnt-1).css("opacity","1");
		if(cnt<0){cnt=1};
	});
	$(".interview-next").on("click",function(e){
		cnt=cnt+1;
		$(".interview ul").eq(cnt+1).css("opacity","1");
		if(cnt>1){cnt=0};
	});
}

function wall(){	
	$(".wall-pic li").css("opacity","0").first().css("opacity","1");
	var current=0;
	var timer = 0;
	var delay=2000;
	timer = setInterval(make,delay);
	clearInterval(timer);
	setInterval(make,delay);
	
	function make(){
		current++;
		if(current>4){current=0};
		$(".wall-pic li").css("opacity","0").eq(current).css("opacity","1");
		$(".wall-paging li").removeClass();
		$(".wall-paging li").eq(current).addClass("on");
	}
	
	$(".wall-paging li").on("click",function(e){
		current=$(this).index();
		$(".wall-pic li").css("opacity","0").eq(current).css("opacity","1");
		$(".wall-paging li").removeClass();
		$(this).addClass("on");
	});	
	
}
function bookTab(){
	var cnt = 0;
	$(".book-info ul").hide().first().show();
	$(".book-tab span").on("click",function(e){
		cnt = $(this).index();
		$(".book-info ul").hide();
		$(".book-info ul").eq(cnt).show();
		$(".book-tab span").removeClass();
		$(this).addClass("on");
	});
}
function productTab(){
	var cnt = 0;
	$(".big-news").hide().first().show();
	$(".product-tab span").on("click",function(e){
		cnt = $(this).index();
		$(".big-news").hide();
		$(".big-news").eq(cnt).show();
		$(".product-tab span").removeClass();
		$(this).addClass("on");
	});
}
function talkTab(){
	var cnt = 0;
	$(".big-com ul li").hide().first().show();
	$(".sub-com").hide().first().show();
	
	$(".talk-tab span").on("click",function(e){
		cnt = $(this).index();
		$(".big-com ul li").hide();
		$(".sub-com").hide();
		
		$(".big-com ul li").eq(cnt).show();
		$(".sub-com").eq(cnt).show();
		$(".talk-tab span").removeClass();
		$(this).addClass("on");
	});
}
function writeTab(){
	var cnt=0;
	$(".writer-pic ul").hide().first().show();
	$(".small-writer").hide().first().show();
	$(".writer-tab span").on("click",function(e){
		cnt=$(this).index();
		$(".writer-pic ul").hide();
		$(".small-writer").hide();
		$(".writer-pic ul").eq(cnt).show();
		$(".small-writer").eq(cnt).show();
		$(".writer-tab span").removeClass();
		$(this).addClass("on");	
	});
}

function readerTab(){
	var cnt=0;
	$(".reader-list").css("opacity","0").first().css("opacity","1");
	$(".reader-tab .prev").on("click",function(e){
		cnt=cnt-1;
		$(".reader-list").css("opacity","0").eq(cnt-1).css("opacity","1");
		if(cnt<0){cnt=1};
	});
	$(".reader-tab .next").on("click",function(e){
		cnt=cnt+1;
		$(".reader-list").css("opacity","0").eq(cnt-1).css("opacity","1");
		if(cnt>1){cnt=0};
	});
	
};

function gift(){
	var last=$(".usedlist li").last();
	$(".usedlist").prepend(last);
	$(".usedlist li").css("left","-=225px");
	
	var first="";
	var timer =setInterval(make,2000);
	function make(){
		$(".usedlist").animate({left:"-225px"},500,function(e){
			first=$(".usedlist li").first();
			$(".usedlist").append(first);
			$(".usedlist").css("left","-225px");
		})
	}
	
	$(".gift .prev").on("click",function(e){
		$(".usedlist").animate({left:"+=225px"},500,function(e){
			last=$(this).last;
			$(".usdelist").prepend(last);
			$(".usdelist").animate({left:"225px"},500);
		});
	});
	$(".gift .next").on("click",function(e){
		make();
		clearInterval();
		setInterval(timer)
	});
}

function musicAdv(){
	var last = $(".adver li").last();
	$(".adver").prepend(last);
	$(".adver").css("left","-=770px");
	
	var first="";
	var timer =setInterval(make,2000);
	function make(){
		$(".adver").animate({left:"-=770px"},500,function(e){
			first = $(".adver li").first();
			$(".adver").append(first);
			$(".adver").css("left","-770px");
		})
	}

}













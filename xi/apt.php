<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8" /> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>이수민 포트폴리오</title>
  <meta name="viewport" content="width=device-width; initial-scale=1.0">
  <meta name="description" content="웹포트폴리오 이수민">
  <meta name="keywords"    content="웹 디자인, 그래픽, HTML5, CSS3">
  <meta name="author"      content="이수민">
  <link rel="shortcut icon" href="images/main/favicon-smlee.ico">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">  
  <link rel="stylesheet" href="css/subimport.css" type="text/css"/>
  <link rel="stylesheet" href="fa/css/font-awesome.min.css" />
  <!--[if lt IE 9]>  <script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script> <![endif]-->
  <!--[if lt IE 9]>  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script> <![endif]-->
 </head>
   
 <body>
 <? include("include/header.php")  ?>
	
	<section id="visual">
		<div class="inner-wrap">
			<h2>분양정보</h2>
		</div>
	</section>
	
	<div id="container">
		
		<aside id="sideBar">
			<h2>분양정보</h2>
			<nav class="nav">
				<ul class="lnb">
					<li><a href="building.php">상가분양</a></li>
					<li><a href="apt.php">분양단지</a></li>
					<li><a href="#">분양캘린더</a></li>
					<li><a href="#">분양문의</a></li>
				</ul>
				
				<ul class="side-banner">
					<li>
						<a href="#"><img src="images/sublayout/check.jpg" alt="check" />
						<span>청약당첨자조회</span></a>
					</li>
					<li>
						<a href="#"><img src="images/sublayout/home.jpg" alt="home" />
						<span>견본주택정보</span></a>
					</li>
				</ul>
			</nav>
		</aside>
		
	
		<section id="content">
			<div class="con-top">
				<h2><span>분양</span>단지</h2>
				<p>자이의 분양중인 단지 정보를 알려드립니다.</p>
				<dl class="icon">
					<dt class="hide">콘탑 상위메뉴입니다.</dt>
					<dd><i class="fa fa-facebook-official" aria-hidden="true"></i></dd>
					<dd><i class="fa fa-twitter-square" aria-hidden="true"></i></dd>
					<dd><i class="fa fa-print" aria-hidden="true"></i></dd>
					<dd><i class="fa fa-envelope-o" aria-hidden="true"></i></dd>
					<dd><i class="fa fa-file-text-o" aria-hidden="true"></i></dd>
				</dl>
			</div>
			
			
			<div class="con-apt cf">
				<div class="search cf">
					<fieldset>
						<label class="hide" for="location">지역</label>
						<select class="location" title="지역찾기">
							<option>지역</option>
							<option>서울</option>
							<option>경기</option>
							<option>인천</option>
							<option>충남</option>
							<option>충북</option>
							<option>경남</option>
							<option>경북</option>
						</select>
					</fieldset>
					
					<fieldset>
						<label class="hide" for="width">면적</label>
						<select class="width" title="면적찾기">
							<option>면적</option>
							<option>0~65㎡</option>
							<option>66~100㎡</option>
							<option>101~130㎡</option>
							<option>130~165㎡</option>
							<option>166~200㎡</option>
							<option>266~330㎡</option>
						</select>
					</fieldset>
					
					<fieldset>
						<label class="hide" for="month">입주예정월</label>
						<select class="month" title="입주예정월 찾기">
							<option>2018년 08월</option>
							<option>2018년 10월</option>
							<option>2019년 01월</option>
							<option>2019년 02월</option>
							<option>2019년 03월</option>
							<option>2019년 05월</option>
							<option>2019년 07월</option>
							<option>2019년 09월</option>
						</select>
					</fieldset>	
				</div> <!-- search -->
				
				<div class="info cf info1">
					<img src="images/contents2/heungduck.png" alt="흥덕파크자이" />
					<h3>흥덕파크자이</h3>
					<dl class="sell cf">
						<dt class="hide">분양안내입니다.</dt>
						<dd>· 분양시기 : 2017년 03월</dd>
						<dd>· 입주시기 : 2019년 07월(예정)</dd>
						<dd>· 위치 : 충북 청주시 흥덕구</dd>
						<dd>· 전용면적 : 66~84㎡</dd>
						<dd>· 세대수 : 2,529(일반635)</dd>
						<dd>· 문의전화 : 043-230-0777</dd>
					</dl>
					
					<div class="button cf">
						<p><a href="#">분양상담예약</a></p>
						<p><a href="#">관심단지</a></p>
						<p><a href="#">홈페이지</a></p>
						<p><a href="#">견본주택위치</a></p>
					</div>	<!-- button -->
				</div>	<!-- info -->
				
				<div class="info">
					<img src="images/contents2/westcheongjoo.png" alt="서청주파크자이" />
					<h3>서청주파크자이</h3>
					<dl class="sell">
						<dt class="hide">분양안내입니다.</dt>
						<dd>· 분양시기 : 2017년 02월</dd>
						<dd>· 입주시기 : 2019년 09월(예정)</dd>
						<dd>· 위치 : 청주시 흥덕구</dd>
						<dd>· 전용면적 : 59~110㎡</dd>
						<dd>· 세대수 : 1,495</dd>
						<dd>· 문의전화 : 1661-9005</dd>
					</dl>
					
					<div class="button cf">
						<p><a href="#">분양상담예약</a></p>
						<p><a href="#">관심단지</a></p>
						<p><a href="#">홈페이지</a></p>
						<p><a href="#">견본주택위치</a></p>
					</div>
					
				</div>
				<div class="info  info1 cf">
					<img src="images/contents2/osan.png" alt="오산시티자이2차" />
					<h3>오산시티자이2차</h3>
					<dl class="sell">
						<dt class="hide">분양안내입니다.</dt>						
						<dd>· 분양시기 : 2017년 02월</dd>
						<dd>· 입주시기 : 2019년 10월(예정)</dd>
						<dd>· 위치 : 경기도 오산시</dd>
						<dd>· 공급타입 : 59~102㎡</dd>
						<dd>· 세대수 : 1,090</dd>
						<dd>· 문의전화 : 1644-0977</dd>
					</dl>
					
					<div class="button cf">
						<p><a href="#">분양상담예약</a></p>
						<p><a href="#">관심단지</a></p>
						<p><a href="#">홈페이지</a></p>
						<p><a href="#">견본주택위치</a></p>
					</div>
					
				</div>
				<div class="info">
					<img src="images/contents2/bangbae.png" alt="방배아트자이" />
					<h3>방배아트자이</h3>
					<dl class="sell">
						<dt class="hide">분양안내입니다.</dt>
						<dd>· 분양시기 : 2017년 01월</dd>
						<dd>· 입주시기 : 2018년 10월(예정)</dd>
						<dd>· 위치 : 서울시 서초구</dd>
						<dd>· 공급타입 : 59~126㎡</dd>
						<dd>· 세대수 : 총 353 (일반 96)</dd>
						<dd>· 문의전화 : 1522-7010</dd>
					</dl>
					
					<div class="button cf">
						<p><a href="#">분양상담예약</a></p>
						<p><a href="#">관심단지</a></p>
						<p><a href="#">홈페이지</a></p>
						<p><a href="#">견본주택위치</a></p>
					</div>
					
				</div>
				<div class="info info1 cf">
					<img src="images/contents2/yulha.png" alt="율하자이힐스테이트" />
					<h3>율하자이힐스테이트</h3>
					<dl class="sell">
						<dt class="hide">분양안내입니다.</dt>
						<dd>· 분양시기 : 2017년 01월</dd>
						<dd>· 입주시기 : 2019년 05월(예정)</dd>
						<dd>· 위치 : 경남 김해시 율하 2지구 內</dd>
						<dd>· 공급타입 : 74, 84㎡</dd>
						<dd>· 세대수 : 1,245</dd>
						<dd>· 문의전화 : 1544-4585</dd>
					</dl>
					
					<div class="button cf">
						<p><a href="#">분양상담예약</a></p>
						<p><a href="#">관심단지</a></p>
						<p><a href="#">홈페이지</a></p>
						<p><a href="#">견본주택위치</a></p>
					</div>
					
				</div>
				<div class="info">
					<img src="images/contents2/yeonsoo.png" alt="연수파크자이" />
					<h3>연수파크자이</h3>
					<dl class="sell">
						<dt class="hide">분양안내입니다.</dt>
						<dd>· 분양시기 : 2016년 12월</dd>
						<dd>· 입주시기 : 2019년 05월(예정)</dd>
						<dd>· 위치 : 인천시 연수구</dd>
						<dd>· 공급타입 : 76~101㎡</dd>
						<dd>· 세대수 : 1,023</dd>
						<dd>· 문의전화 : 1644-0442</dd>
					</dl>
					
					<div class="button cf">
						<p><a href="#">분양상담예약</a></p>
						<p><a href="#">관심단지</a></p>
						<p><a href="#">홈페이지</a></p>
						<p><a href="#">견본주택위치</a></p>
					</div>
					
				</div>
				<div class="info info1 cf">
					<img src="images/contents2/gimcheon.jpg" alt="김천센트럴자이" />
					<h3>김천센트럴자이</h3>
					<dl class="sell">
						<dt class="hide">분양안내입니다.</dt>
						<dd>· 분양시기 : 2016년 11월</dd>
						<dd>· 입주시기 : 2019년 03월(예정)</dd>
						<dd>· 위치 : 경상북도 김천시</dd>
						<dd>· 공급타입 : 59~99㎡</dd>
						<dd>· 세대수 : 930</dd>
						<dd>· 문의전화 : 1522-9300</dd>
					</dl>
					
					<div class="button cf">
						<p><a href="#">분양상담예약</a></p>
						<p><a href="#">관심단지</a></p>
						<p><a href="#">홈페이지</a></p>
						<p><a href="#">견본주택위치</a></p>
					</div>
					
				</div>
				<div class="info">
					<img src="images/contents2/youngjong.png" alt="영종하늘도시푸르지오자이" />
					<h3>영종하늘도시푸르지오자이</h3>
					<dl class="sell">
						<dt class="hide">분양안내입니다.</dt>
						<dd>· 분양시기 : 2016년 10월</dd>
						<dd>· 입주시기 : 2019년 02월(예정)</dd>
						<dd>· 위치 : 영종하늘도시</dd>
						<dd>· 공급타입 : 64,74,84㎡</dd>
						<dd>· 세대수 : 1,604</dd>
						<dd>· 문의전화 : 1600-0878</dd>
					</dl>
					
					<div class="button cf">
						<p><a href="#">분양상담예약</a></p>
						<p><a href="#">관심단지</a></p>
						<p><a href="#">홈페이지</a></p>
						<p><a href="#">견본주택위치</a></p>
					</div>
					
				</div>
			</div>	<!-- con-apt -->
			</section>
			</div>
	
	

 <? include("include/footer.php")  ?>
 
 
  <script type="text/javascript" src="js/jquery.js"> </script>
  <script type="text/javascript" src="js/jquery-ui.min.js"> </script>   
  <script type="text/javascript" src="js/common.js"> </script>
  <script type="text/javascript" src="js/main.js"> </script>

 </body>
</html>






















 

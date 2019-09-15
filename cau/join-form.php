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
	
	<div id="container">
		<ul class="floating-menu">
			<li><a href="#">중앙<br/>서비스</a></li>
			<li><a href="#">방문자<br/>서비스</a></li>
			<li><a href="#">교내<br/>사이트</a></li>
			<li><a href="#">top</a></li>
		</ul>
		<section id="content">
			<div class="inner-1200">
				<div class="makeID">
				<h3>CAU 통합ID생성(Confirm NEW ID creation)</h3>
				<p>통합ID발급 전 기존에 가입된 정보가 있는지 판단하기 위해 확인절차를 거치고 있습니다.
(Verification is required to check if your information is already available before creating a NEW ID.)
입력하신 개인정보는 동의없이 제3자에게 제공되지 않으며, 개인정보취급방침에 따라 보호되고 있습니다.
(Your personal information will not be shared with third parties without your consent and is kept secure under privacy policies.)
				</p>
				<div class="choose-type">
				<input type="radio" name="type" title="employee">
				<label for="professor">교직원</label>
				
				<input type="radio" name="type" title="students">
				<label for="alumnus">학생 및 졸업생</label>
			
				<input type="radio" name="type" title="public">
				<label for="ordinary">일반인</label>
				</div>
				<span></span>
				
				<div class="id-info">
					<table class="enter-info">
						<caption class="hide">개인정보입력</caption>
					
							<tr>
								<th><label for="name"><strong>*</strong>이름</label></th>
								<td>
									<fieldset>
									<label class="hide" for="name">이름입력</label>
									<input type="text" title="이름을 입력하세요." maxlength="8">
									</fieldset>
								</td>
							</tr>
							<tr>
								<th><label for="id"><strong>*</strong>학번/급여번호</label></th>
								<td>
								<fieldset>
									<label class="hide" for="id">학번입력</label>
									<input type="text" title="학번을 입력하세요." maxlength="12">
								</fieldset>
								</td>
							</tr>
							<tr>
								<th><label for="birthday"><strong>*</strong>생년월일</label></th>
								<td>
									<fieldset>
									<label class="hide" for="birthday">생일입력</label>
									<input type="text" title="생일을 입력하세요." maxlength="6">(예:1990년 1월 7일 생일 경우 900107)
									</fieldset>
								</td>
							</tr>
							<tr>
								<th><label for="phone"><strong>*</strong>휴대폰</label></th>
								<td>
									<fieldset>
									<select id="phone" title="통신사">
										<option>SKT</option>
										<option>LGT</option>
										<option>KT</option>
										<option>기타통신사</option>
									</select>
									<input type="text" id="phone2" title="두번째 번호" maxlength="8" placeholder="휴대폰 번호(-제외)">
									</fieldset>
								</td>
							</tr>
							<tr>
								<td></td>
								<td>
									<label for ="choice" class="cf">
										<em class="chkbox agree" title="선택사항"></em><strong>SMS수신동의</strong>
									</label>
								</td>
							</tr>
							<tr>
								<td></td>
								<td>
									<label for ="choice" class="cf">
										<em class="chkbox agree" title="선택사항"></em><strong>이메일수신동의</strong>
									</label>
								</td>
							</tr>
					</table>
				</div>
				
			<div class="choose">
				<input type="radio" name="confirm" title="mobile">
				<label for="mobile">모바일 인증</label>

				<input type="radio" name="confirm" title="mail">
				<label for="email">이메일 인증</label>
				
				<input type="radio" name="confirm" title="ipin">
				<label for="i-pin">아이핀 인증</label>
			</div>	
			<div class="pass-btn">
				<div class="next-page"><a href="#">확인<i class="fa fa-check" aria-hidden="true"></i></a></div>
				<div class="cancel"><a href="#">취소<i class="fa fa-times" aria-hidden="true"></i></a></div>
			</div>
			
				</div><!-- make-ID -->
			</div><!-- inner-1200 -->
		</section>
	</div>
	
	

 <? include("include/footer.php")  ?>
 
 
  <script type="text/javascript" src="js/jquery.js"> </script>
  <script type="text/javascript" src="js/jquery-ui.min.js"> </script>   
  <script type="text/javascript" src="js/common.js"> </script>
  <script type="text/javascript" src="js/sub.js"> </script>

 </body>
</html>






















 

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
				<div class="form-box cf">
					<h5 class="log">로그인</h5>
					<div class="new">
						<div class="log-info">
							<table>
							<tr>
								<th scope="row">
									아이디
								</th>
								<td>
									<fieldset>
									<label class="hide" for="id입력">아이디</label>
									<input type="text" title="아이디를 입력해주세요." maxlength="12"/>
									</fieldset>
								</td>
							</tr>
							<tr>
								<td></td>
								<td> · 5~12자의 영문 소문자,숫자만 사용</td>
							</tr>
							<tr>
								<th scope="row"><label for="pw">비밀번호</label></th>
								<td>
									<fieldset>
									<label class="hide" for="password">비밀번호 입력</label>
									<input type="text" title="비밀번호를 입력하세요." maxlength="16" />
									</fieldset>
								</td>
							</tr>
							<tr>
								<td></td>
								<td> · 8~16자의 영문대소문자,숫자,특수문자 혼합</td>
							</tr>
							</table>
						</div>
					<div class="login">로그인</div>
					
					<div class="login-link">
						<a href="form.php">아이디 찾기</a>
						<a href="form.php">비밀번호 찾기</a>
						<div class="new-join">
							<a href="form.php">회원가입</a>
						</div>
					</div>					
				
					<div class="new-id">
						<p> · 아이디가 없으신 분은 회원가입 후 이용하실 수 있습니다.</p>
						<p> · 비밀번호를 24시간 동안 5회 이상 입력 오류 시, 해당 계정이 자동으로 잠기며, 계정이 잠기거나 비밀번호를 분실하셨을 경우 아이디 찾기 또는 비밀번호 찾기를 클릭하셔서 재발급 절차를 받으실 수 있습니다.</p>
					</div>	
				</div><!-- form-box -->
				
			</div><!-- inner-1200 -->
		</section>
	</div>
	
	

 <? include("include/footer.php")  ?>
 
 
  <script type="text/javascript" src="js/jquery.js"> </script>
  <script type="text/javascript" src="js/jquery-ui.min.js"> </script>   
  <script type="text/javascript" src="js/common.js"> </script>
  <script type="text/javascript" src="js/main.js"> </script>

 </body>
</html>






















 

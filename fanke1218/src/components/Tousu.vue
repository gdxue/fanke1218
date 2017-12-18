<template>
<div id="box">
	<div class="yy_header">
			<span class="yy_header1"></span>
			<span class="yy_header2">用户反馈</span>
		</div>	
		<div class="main">
			<ul class="main_ul">
				<li class="main_ul_li1">
					<span>建议留言</span>
				</li>
				<li  class="main_ul_li2">
					<span>投诉咨询</span>
				</li>
			</ul>
			<form action="">
				<div class="main_form">
					<p class="p1">
						<div class="form_div">
							<p>*</p>
							<span>主题:</span>
						</div>
						<select name="Type" id="Type">
							<option value="8">网站相关</option>
							<option value="8">服务相关</option>
							<option value="8">产品款式和尺码</option>
							<option value="8">其他建议</option>
							<option value="8">我要留言</option>
						</select>
					</p>
				</div>
				<p class="p2">
					<span>*</span>
					留言:
				</p>
				<p class="p3">
					<textarea name="" class="text_area" cols="" rows="" placeholder="为改进不足，提高用户体验，期待您的反馈！"></textarea>
				</p>
				<div class="p4">
					<div class="p4_div">
						<p>*</p>
						<span>Email:</span>
					</div>
					<p class="p4_p">
						<input type="text">
					</p>
				</div>
				<div class="p5">
					<div class="p5_div">
						<span>姓名:</span>
					</div>
					<p class="p5_p">
						<input type="text">
					</p>
				</div>
				<div class="p6">
					<div class="p6_div">
						<span>电话:</span>
					</div>
					<p class="p6_p">
						<input type="text">
					</p>
				</div>
				<div class="p7">
					<div class="p7_div">
						<span>地址:</span>
					</div>
				</div>
				<div class="p8">
					<div class="p8_left">
						<select name="" id="">
							<option value="省/直辖市">省/直辖市</option>
						</select>
					</div>
					<div class="p8_right">
						<select name="" id="">
							<option value="市/州">市/州</option>
						</select>
					</div>
				</div>
				<div class="p9">
					<input type="button" value="提 交" name="" id="">
				</div>
			</form>
		</div>
		<div class="yy"></div>
		<!-- 底部导航栏 -->
		<div class="footer">
			<a href="javascript:void(0)">
				<span class="footer-home-active"></span>
			</a>
			<a href="classify.html">
				<span class="footer-search"></span>
			</a>
			<a href="fanke.html">
				<span class="footer-Tshirt"></span>
			</a>
			<a href="javascript:void(0)">
				<span class="footer-car"></span>
			</a>
			<a href="javascript:void(0)">
				<span class="footer-mine"></span>
			</a>
		</div>
	</div>
</template>
<style>
	@charset "utf-8";
*{
	padding: 0;
	margin: 0;
	box-sizing:border-box;
}
html{
	font-size: 100px;
	height: 100%;
}
input{
	outline:none;
}
select{
	outline:none;
}
ul,li{
	list-style: none;
}
a{
	text-decoration: none;
	color: #999;
}
.yy_header{
	width: 100%;
	height: 0.48rem;
	background-color:#b81c22;
}
.yy_header1{
	width: .17rem;
	height: .17rem;
	text-align: center;
	position: absolute;
	left: .3rem;
	top: .15rem;
	border-bottom: 2px solid #fff;
	border-left: 2px solid #fff;
	-webkit-transform: translate(-50%) rotate(45deg);
	cursor: pointer;
}
.yy_header2{
	height: 0.48rem;
	float: left;
	width: 100%;
	text-align: center;
	line-height: 0.48rem;
	font-size: .17rem;
	color: #fff;
}
.main{
	width: 100%;
}
.main_ul{
	width: 100%;
	height: .27rem;
	margin-top: .04rem;
	text-align: center;
}
.main_ul li{
	width: 50%;
	height: .27rem;
	float: left;
}
.main_ul_li1{
	border-left: 2px solid #e0e1e5;
    border-right: 2px solid #edeef0;
    background-color: #ccced5;
    text-align: center;
}
.main_ul_li1 span{
    color: #e3241d;
    width: 100%;
    line-height: .27rem;
    font-size: .13rem;
    float: left;
    text-align: center;
    line-height: .27rem;
}
.main_ul_li2{
	border-left: 2px solid #e0e1e5;
    background-color: #e0e1e5;
}
.main_ul_li2 span{
	width: 100%;
    color: #333;
    line-height: .27rem;
    font-size: .13rem;
    float: left;
    text-align: center;
    line-height: .27rem;
}

form{
	width: 100%;
}
.main_form{
	width: 3.63rem;
	height: .39rem;
	margin: 0 auto;
	margin-top: .1rem;
}
.form_div{
	width: 1.088rem;
	height: .32rem;
	float: left;
}
.form_div p{
	color:#e8270c;
	font-size: .14rem;
	float: left;
	line-height: .32rem;
	margin-left: .1rem;
}
.form_div span{
	font-size:.14rem;
	float: left;
	line-height: .32rem;
}
.main_form select{
	width: 2.54rem;
	height: .18rem;
	float: left;
	font-size: .12rem;
	margin-top: .07rem;
}
.main_form select option{
	font-size: .12rem;
}
.p2{
	width: 3.63rem;
	height: .19rem;
	font-size: .14rem;
	margin: 0 auto;
}
.p2 span{
	font-size: .14rem;
	color: #e8270c;
	margin-left: .1rem;
	float: left;
}
.p3{
	width: 3.63rem;
	height: 1.14rem;
	margin: 0 auto;
}
.text_area{
	height: 1rem;
	width: 100%;
	color: #c2c2c2;
	outline:none;
	padding-top: .05rem;
	background: #fff;
	font-size: .16rem;
	border-radius: .05rem;
	border: 1px solid #aeafb1;
}
.p4{
	height: .39rem;
}
.p4_div{
	width: 30%;
	width: 1rem;
	height: .32rem;
	float: left;
}
.p4_div p{
	color:#e8270c;
	font-size: .14rem;
	float: left;
	line-height: .32rem;
	margin-left: .1rem;
}
.p4_div span{
	font-size:.14rem;
	float: left;
	line-height: .32rem;
}
.p4_p{
	width: 70%;
	float: left;
}
.p4_p input{
	width: 100%;
	height: .3rem;
	line-height: .3rem;
	color: #c2c2c2;
	background: #fff;
	font-size: .16rem;
	float: left;
	border: 1px solid #aeafb1;
	border-radius: .05rem;
}
.p5{
	height: .39rem;
}
.p5_div{
	height: .32rem;
	width: 1rem;
	float: left;
}
.p5_div p{
	color:#e8270c;
	font-size: .14rem;
	float: left;
	line-height: .32rem;
	margin-left: .1rem;
}
.p5_div span{
	font-size:.14rem;
	float: left;
	margin-left: .1rem;
	line-height: .32rem;
}
.p5_p{
	width: 70%;
	float: left;
}
.p5_p input{
	width: 100%;
	height: .3rem;
	line-height: .3rem;
	color: #c2c2c2;
	background: #fff;
	font-size: .16rem;
	float: left;
	border: 1px solid #aeafb1;
	border-radius: .05rem;
}
.p6{
	height: .39rem;
}

.p6_div{
	height: .32rem;
	width: 1rem;
	float: left;
}
.p6_div p{
	color:#e8270c;
	font-size: .14rem;
	float: left;
	line-height: .32rem;
	margin-left: .1rem;
}
.p6_div span{
	font-size:.14rem;
	float: left;
	margin-left: .1rem;
	line-height: .32rem;
}
.p6_p{
	width: 70%;
	float: left;
}
.p6_p input{
	width: 100%;
	height: .3rem;
	line-height: .3rem;
	color: #c2c2c2;
	background: #fff;
	font-size: .16rem;
	float: left;
	border: 1px solid #aeafb1;
	border-radius: .05rem;
}
.p7{
	height: .39rem;
}

.p7_div{
	height: .32rem;
	width: 1rem;
	float: left;
}
.p7_div p{
	color:#e8270c;
	font-size: .14rem;
	float: left;
	line-height: .32rem;
	margin-left: .1rem;
}
.p7_div span{
	font-size:.14rem;
	float: left;
	margin-left: .1rem;
	line-height: .32rem;
}

.p8{
	width: 100%;
	height: .2819rem;
}
.p8_left{
	width: 40%;
	float: left;
	margin-left: .05rem;
}
.p8_left select{
	width: 100%;
	height: .28rem;
	float: left;
	font-size: .12rem;
	border-radius: .05rem;
}
.p8_right{
	width: 40%;
	float: right;
	margin-right: .05rem;
}
.p8_right select{
	width: 100%;
	height: .28rem;
	float: right;
	font-size: .12rem;
	border-radius: .05rem;
}

.p9{
	width: 100%;
	text-align: center;
	float: left;
}
.p9 input{
	text-align: center;
	border:1px solid #d5200e;
	height: .37rem;
	border-radius: .04rem;
	background: #d5200e;
	font-size: .16rem;
	line-height: .37rem;
	color: #fff;
	width: 50%;
}
/*-----------底部导航栏--------*/
.footer{
	width: 100%;
	height: .52rem;
	position: fixed;
	line-height: .2rem;
	z-index: 2;
	bottom: -.01rem;
	left: 0;
	background: #fff;
	border-top: 1px solid #999;
}
.footer a{
	display: inline-block;
	width: 13%;
	height: 100%;
	text-align: center;
}
.footer span{
	width: .36rem;
	height: .48rem;
	display: inline-block;
	background-image: url(../assets/img/navBgimgNew.png);
	background-repeat: no-repeat;
	overflow: hidden;
	background-size: .36rem 5rem;
	-webkit-transform: transform(-50%, -50%);
	margin-top: .04rem;
}
.footer-home-active{
	background-position: 0rem -2.5rem;
}
.footer-search{
	background-position: 0rem -.5rem;
}
.footer-Tshirt{
	background-position: 0rem -1rem;
}
.footer-car{
	background-position: 0rem -1.5rem;
}
.footer-mine{
	background-position: 0rem -2rem;
}
.yy{
	width: 100%;
	height: .53rem;
	margin-bottom: 1rem;
}

</style>
<template>
	<div id="classify_y">
			<div class="yyc_main">
					<div class="yyc_header">

						<a href="javascript:void(0)"><span class="yyc_header1"></span></a>

						<span class="yyc_header2">分类</span>
					</div>
					<div class="yyc_main_left">
						<ul>
							<!-- <li v-for="item in list"> -->
								<!-- {{item.TypeName}} -->
							<!-- </li> -->
						</ul>
					</div>
					<div class="yyc_main_right">
						<ul>
							<li>
								<router-link to="/classifys">
								<a href="javascript:void(0)">
									<img src="../assets/img/6378353-1j201709090039435468.jpg">
								</a>
								</router-link>
								<span>卫衣</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="../assets/img/6375651-1j201709151926288158.jpg">
								</a>
								<span>外套</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="../assets/img/6375440-1j201709151926140815.jpg">
								</a>
								<span>大衣</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="../assets/img/6378261-1j201709211359324069.jpg">
								</a>
								<span>针织衫</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="../assets/img/6377096-1201709181534482577.jpg">
								</a>
								<span>吉国武</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="../assets/img/6377955-1j201709181637082123.jpg">
								</a>
								<span>牛津纺</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="../assets/img/6375163-1j201709151925189721.jpg">
								</a>
								<span>水柔棉</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="../assets/img/6377971-1j201709260833241850.jpg">
								</a>
								<span>休闲衫</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="../assets/img/6373863-1j201709191136144818.jpg">
								</a>
								<span>皮肤衣</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="../assets/img/6378464-1j201709221623443761.jpg">
								</a>
								<span>童装</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="../assets/img/6375237-1j201609181106554831.jpg">
								</a>
								<span>休闲裤</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="../assets/img/6375663-1201702221659421316.jpg">
								</a>
								<span>牛仔裤</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="../assets/img/6375881-1j201702281503335949.jpg">
								</a>
								<span>帆布鞋</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="../assets/img/6375869-1j201703301445582286.jpg">
								</a>
								<span>复古跑</span>
							</li>
						</ul>
					</div>
			</div>
	</div>
</template>

<script>
	export default {
		name: 'Classify'
	}
</script>
<style>
	@charset"utf-8";
*{
	padding: 0;
	margin: 0;
}
html{
	font-size: 100px;
	height: 100%;
}
ul,li{
	list-style: none;
}
a{
	text-decoration: none;
	color: #999;
}
#classify_y{
	width: 100%;
	height: 100%;
}
#classify_y .yyc_header{
	width: 100%;
	height: 0.48rem;
	background-color:#b81c22;
}
#classify_y .yyc_header1{
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
#classify_y .yyc_header2{
	height: 0.48rem;
	float: left;
	width: 100%;
	text-align: center;
	line-height: 0.48rem;
	font-size: .17rem;
	color: #fff;
}

/*********主体**********/
#classify_y .yyc_main{
	width: 100%;
	background-color: #fff;
}

/*********主体左侧**********/
#classify_y .yyc_main_left{
	width: 25%;
	float: left;
	height: 6.1rem;
	background-color: #e5e5e5;
}
#classify_y .yyc_main_left ul{
	width: 100%;
}
#classify_y .yyc_main_left ul li{
	text-align: center;
	line-height: .37rem;
	height: .37rem;
	font-size: .14rem;
	cursor: pointer;
	border-bottom: 1px solid #fff;
}
#classify_y .yyc_main_left ul li:hover{
	color: #CC0000;
	background-color: #fff;
}
/*********主体右侧**********/
#classify_y .yyc_main_right{
	width: 75%;
	float: right;
}
#classify_y .yyc_main_right ul{
	width: 100%;
}
#classify_y .yyc_main_right ul li{
	width: 33%;
	height: .9961rem;
	float: left;
}
#classify_y .yyc_main_right ul li img{
	width: .6961rem;
	height: .6961rem;
	float: left;
	margin-top: .1rem ;
	margin-left: .1rem;
	margin-right: .15rem;
	display: block;
}
#classify_y .yyc_main_right ul li span{
	font-size: .14rem;
	color: #999;
	display: block;
	text-align: center;
	line-height: .3rem;
}

/*-----------底部导航栏--------*/
#classify_y .footer{
	width: 100%;
	height: .52rem;
	position: fixed;
	z-index: 2;
	bottom: -.01rem;
	line-height: .2rem;
	left: 0;
	background: #fff;
	display: flex;
	border-top: 1px solid #999;
}
#classify_y .footer a{
	flex:1;
	width: 20%;
	height: 100%;
	margin-left: 6%;
}
#classify_y .footer span{
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
#classify_y .footer-home-active{
	background-position: 0rem 0rem;
}
#classify_y .footer-search{
	background-position: 0rem -3rem;
}
#classify_y .footer-Tshirt{
	background-position: 0rem -1rem;
}
#classify_y .footer-car{
	background-position: 0rem -1.5rem;
}
#classify_y .footer-mine{
	background-position: 0rem -2rem;
}
</style>
